import { Blog } from '@/utils/blog';
import { Metadata } from 'next';

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
      <h1>{metadata?.title}</h1>
      <p>{content}</p>
    </div>
  );
}
