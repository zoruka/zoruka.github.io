import { Blog } from '@/utils/blog';
import { Metadata } from 'next';
import styles from './page.module.scss';
import Markdown from 'react-markdown';
import Link from 'next/link';

type BlogPageProps = {
  params: {
    postId: string;
  };
};

export const generateStaticParams = async () => {
  return Blog.getIds().then((ids) => {
    return ids.map((postId) => ({ postId }));
  });
};

export const generateMetadata = async ({
  params: { postId },
}: BlogPageProps): Promise<Metadata> => {
  const { metadata } = await Blog.getPost(postId);

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.description,
  };
};

export default async function BlogPage({ params: { postId } }: BlogPageProps) {
  const { metadata, content } = await Blog.getPost(postId);

  return (
    <div>
      <PostHeading metadata={metadata} />
      <PostContent content={content} />
    </div>
  );
}

type PostHeadingProps = {
  metadata: Blog.PostMetadata;
};
const PostHeading: React.FC<PostHeadingProps> = ({ metadata }) => {
  return (
    <div>
      <Link href="/blog" className={styles.back}>
        {'< '}Back
      </Link>
      <h1>{metadata.title}</h1>
      <span className={styles.timestamp}>
        {new Date(metadata.pubDate).toLocaleDateString(undefined, {
          year: 'numeric',
          weekday: 'long',
          month: 'long',
          day: '2-digit',
        })}
      </span>
    </div>
  );
};

type PostContentProps = {
  content: string;
};
const PostContent: React.FC<PostContentProps> = ({ content }) => {
  return <Markdown>{content}</Markdown>;
};
