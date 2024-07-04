import { readdir, readFile } from 'fs/promises';
import path from 'path';
import YAML from 'yaml';

type BlogPageProps = {
  params: {
    postId: string;
  };
};

type Blog = {
  content: string;
  metadata: {
    title: string;
    description: string;
    pubDate: string;
    image: {
      url: string;
      alt: string;
    };
  };
};

const POSTS_FOLDER = path.resolve(__dirname, '../../../../../../blog');

export const generateStaticParams = async () => {
  const files = await readdir(POSTS_FOLDER);
  const posts = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace('.md', ''));

  return posts.map<BlogPageProps['params']>((postId) => ({
    postId,
  }));
};

export default async function BlogPage({ params: { postId } }: BlogPageProps) {
  const { metadata, content } = await (async () => {
    const fileBuffer = await readFile(`${POSTS_FOLDER}/${postId}.md`);
    const fileString = fileBuffer.toString('utf-8');

    const [_, metadata, content] = fileString.split('---');

    return { metadata: YAML.parse(metadata), content: content.trim() };
  })();

  return (
    <div>
      <h1>{metadata?.title}</h1>
      <p>{content}</p>
    </div>
  );
}
