import { Pager } from '@/components';
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
          { route: '/', label: 'About' },
          { route: '/projects', label: 'Projects' },
          { route: '/blog', label: 'Blog' },
        ]}
      >
        {children}
      </Pager>
    </>
  );
}
