import { Blog } from '@/utils/blog';

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

export default async function BlogPage({ params: { postId } }: BlogPageProps) {
  const { metadata, content } = await Blog.getPost(postId);

  return (
    <div>
      <h1>{metadata?.title}</h1>
      <p>{content}</p>
    </div>
  );
}
