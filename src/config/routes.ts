export const routes = {
  home: () => '/',
  projects: () => '/projects',
  blog: {
    list: () => '/blog',
    post: (id) => `/blog/${id}`,
  },
} as const satisfies Routes;

type Route = ((params: string | number) => string) | Routes;

type Routes = {
  [key: string]: Route;
};
