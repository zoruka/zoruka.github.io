import { Section } from '@/components';
import { BlogPostsList } from '@/components/blog-posts-list';
import { Blog } from '@/utils/blog';

export default async function ProjectsPage() {
  const posts = await Blog.getPosts();

  return (
    <Section heading="Scrolls">
      <BlogPostsList posts={posts} />
    </Section>
  );
}
