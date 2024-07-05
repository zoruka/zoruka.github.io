import { constants } from '@/config/constants';
import { readFile, readdir } from 'fs/promises';
import YAML from 'yaml';

export const Blog = {
  getIds: async () => {
    const files = await readdir(constants.blogPath);
    const posts = files
      .filter((file) => file.endsWith('.md'))
      .map((file) => file.replace('.md', ''));

    return posts;
  },
  getPost: async (id: string): Promise<Blog.Post> => {
    const fileBuffer = await readFile(`${constants.blogPath}/${id}.md`);
    const fileString = fileBuffer.toString('utf-8');

    const [_, metadata, content] = fileString.split('---');

    return { metadata: YAML.parse(metadata), content: content.trim() };
  },
  getPosts: async (): Promise<Blog.Post[]> => {
    const ids = await Blog.getIds();
    const posts = await Promise.all(ids.map((id) => Blog.getPost(id)));

    return posts;
  },
};

export namespace Blog {
  export type Post = {
    content: string;
    metadata: PostMetadata;
  };

  export type PostMetadata = {
    title: string;
    description: string;
    pubDate: string;
    image?: {
      url: string;
      alt: string;
    };
  };
}
