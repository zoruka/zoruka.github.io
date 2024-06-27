'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import * as Fathom from 'fathom-client';

export type FathomAnalyticsProps = {
  trackingCode: string;
  includedDomains?: string[];
};

export const FathomAnalytics: React.FC<FathomAnalyticsProps> = (props) => {
  return (
    <Suspense fallback={null}>
      <TrackPageView {...props} />
    </Suspense>
  );
};

const TrackPageView: React.FC<FathomAnalyticsProps> = ({
  trackingCode,
  includedDomains,
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    Fathom.load(trackingCode, {
      includedDomains,
    });
  }, []);

  useEffect(() => {
    Fathom.trackPageview({
      url: pathname + searchParams.toString(),
      referrer: document.referrer,
    });
  }, [pathname, searchParams]);

  return null;
};
