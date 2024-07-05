import { Pager } from '@/components';
import { routes } from '@/config/routes';
import { ProfileFragment } from '@/fragments';

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProfileFragment />
      <Pager
        tabs={[
          { route: routes.home(), label: 'About' },
          { route: routes.projects(), label: 'Projects' },
          { route: routes.blog.list(), label: 'Blog' },
        ]}
      >
        {children}
      </Pager>
    </>
  );
}
