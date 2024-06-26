'use client';

import React, { useEffect, useState } from 'react';
import styles from './talk-balloon.module.scss';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils';

export const TalkBalloon: React.FC<{
  children: string;
}> = ({ children }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    const delay = text.length === 0 ? 500 : 250 - Math.random() * 210;

    const timeout = setTimeout(() => {
      if (text.length < children.length) {
        setText(children.slice(0, text.length + 1));
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <span className={styles.container}>
      {text.length === children.length ? (
        <>
          {text.slice(0, -1)}
          <span className={styles.blinking}>{text.slice(-1)}</span>
        </>
      ) : (
        text
      )}
      <AnimatedStroke />
    </span>
  );
};

const AnimatedStroke: React.FC = () => {
  return (
    <div className={styles.stroke_container}>
      <div className={strokeLineVariants({ orientation: 'horizontal-top' })} />
      <div
        className={strokeLineVariants({ orientation: 'horizontal-bottom' })}
      />
      <div className={strokeLineVariants({ orientation: 'vertical-right' })} />
      <div className={strokeLineVariants({ orientation: 'vertical-left' })} />
    </div>
  );
};

const strokeLineVariants = cva(styles.stroke_line, {
  variants: {
    orientation: {
      'horizontal-top': cn(
        styles.stroke_line_horizontal,
        styles.stroke_line_top
      ),
      'horizontal-bottom': cn(
        styles.stroke_line_horizontal,
        styles.stroke_line_bottom
      ),
      'vertical-right': cn(
        styles.stroke_line_vertical,
        styles.stroke_line_right
      ),
      'vertical-left': cn(styles.stroke_line_vertical, styles.stroke_line_left),
    },
  },
});
