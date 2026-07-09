'use client';

import { VariantProps, cva } from 'class-variance-authority';
import styles from './pager.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { isSamePath } from '@/utils';

type TabParams = {
  route: string;
  label: React.ReactNode;
};

export type PagerProps = React.HTMLAttributes<HTMLDivElement> & {
  tabs: TabParams[];
};

export const Pager: React.FC<PagerProps> = ({ children, tabs }) => {
  const pathname = usePathname() ?? '';
  const router = useRouter();
  const [open, setOpen] = useState(() => pathname !== '/');
  const pagerRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  const resetContentScroll = () => {
    contentWrapperRef.current?.scrollTo(0, 0);
  };

  useEffect(() => {
    // Handle the initial state
    if (pathname !== '/') {
      setOpen(true);
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (pagerRef.current && !pagerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    resetContentScroll();
    requestAnimationFrame(resetContentScroll);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [pathname]);

  useEffect(() => {
    // Handle the scroll behavior
    if (!contentWrapperRef.current) return;

    if (open) {
      contentWrapperRef.current.focus();

      const handleWheel = (event: WheelEvent) => {
        if (event.deltaY < -30 && contentWrapperRef.current?.scrollTop === 0) {
          setOpen(false);
        }
      };

      const pos = { y: 0 };
      const handleTouchStart = (event: TouchEvent) => {
        pos.y = event.touches[0].clientY;
      };
      const handleTouchEnd = (event: TouchEvent) => {
        if (!contentWrapperRef.current) return;

        console.log(
          contentWrapperRef.current.scrollTop,
          pos.y,
          event.changedTouches[0].clientY
        );

        if (
          event.changedTouches[0].clientY > pos.y &&
          contentWrapperRef.current.scrollTop <= 0
        ) {
          setOpen(false);
        }
      };

      contentWrapperRef.current.addEventListener('wheel', handleWheel);
      window.addEventListener('touchstart', handleTouchStart);
      window.addEventListener('touchend', handleTouchEnd);
      return () => {
        contentWrapperRef.current?.removeEventListener('wheel', handleWheel);
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchend', handleTouchEnd);
      };
    } else {
      const handleScroll = (event: WheelEvent) => {
        if (event.deltaY > 30 && window.scrollY === 0) {
          setOpen(true);
        }
      };

      const pos = { y: 0 };
      const handleTouchStart = (event: TouchEvent) => {
        pos.y = event.touches[0].clientY;
      };
      const handleTouchEnd = (event: TouchEvent) => {
        if (event.changedTouches[0].clientY < pos.y) {
          setOpen(true);
        }
      };

      window.addEventListener('wheel', handleScroll);
      window.addEventListener('touchstart', handleTouchStart);
      window.addEventListener('touchend', handleTouchEnd);

      return () => {
        window.removeEventListener('wheel', handleScroll);
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [open, contentWrapperRef]);

  const handleTabSwitch = (
    route: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    if (isSamePath(route, pathname)) {
      event.preventDefault();
      setOpen((o) => !o);
      return;
    }

    event.preventDefault();
    resetContentScroll();
    setOpen(true);

    router.push(route, { scroll: false });
  };

  return (
    <div className={pagerVariants({ open })} ref={pagerRef}>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <Tab
            key={tab.route}
            route={tab.route}
            onTabSwitch={handleTabSwitch}
            active={isSamePath(tab.route, pathname)}
          >
            {tab.label}
          </Tab>
        ))}
      </div>

      <div className={styles.content_wrapper} ref={contentWrapperRef}>
        <section className={styles.content}>{children}</section>
      </div>
    </div>
  );
};

const pagerVariants = cva(styles.container, {
  variants: {
    open: {
      true: styles.container_open,
      false: styles.container_close,
    },
  },
});

type TabProps = React.PropsWithChildren<{
  route: string;
  active?: boolean;
  onTabSwitch: (
    route: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => void;
}>;

const Tab: React.FC<TabProps> = ({ children, route, active, onTabSwitch }) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onTabSwitch(route, event);
  };

  return (
    <a
      href={route}
      className={tabVariants({ active })}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

const tabVariants = cva(styles.tab, {
  variants: {
    active: {
      true: styles.tab_active,
    },
  },
});
