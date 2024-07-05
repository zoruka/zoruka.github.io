import { Blog } from '@/utils/blog';
import styles from './blog-posts-list.module.scss';
import Link from 'next/link';
import { routes } from '@/config/routes';
import { formatDate } from '@/utils';

export type BlogPostsListProps = {
  posts: Blog.Post[];
};

export const BlogPostsList: React.FC<BlogPostsListProps> = ({ posts }) => {
  return posts.map(({ id, metadata: { title, description, pubDate } }) => (
    <div className={styles.container}>
      <Link href={routes.blog.post(id)}>
        <h2 className={styles.heading}>{`${title} >`}</h2>
      </Link>
      <span className={styles.timestamp}>{formatDate(pubDate)}</span>

      <p className={styles.description}>{description}</p>
    </div>
  ));
};
