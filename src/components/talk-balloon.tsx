'use client';

import React, { useEffect, useState } from 'react';
import styles from './talk-balloon.module.scss';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils';

export const TalkBalloon: React.FC<{
  children: string;
}> = ({ children }) => {
  const [text, setText] = useState(children[0]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text.length < children.length) {
        setText(children.slice(0, text.length + 1));
      }
    }, 250 - Math.random() * 210);

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

// const StrokeLine = styled.div<{ orientation: string }>`

//   border-left-width: ${(props) =>
//     props.orientation.includes('left') ? '1px' : '0px'};

//   border-bottom-width: ${(props) =>
//     props.orientation.includes('bottom') ? '1px' : '0px'};
//   border-right-width: ${(props) =>
//     props.orientation.includes('right') ? '1px' : '0px'};

//   ${(props) =>
//     props.orientation.includes('top') &&
//     `

//   `}

//   ${(props) =>
//     props.orientation.includes('bottom') &&
//     `
//     bottom: 0;
//     animation: stroke-bottom-transition 30s 0s infinite linear;
//     @keyframes stroke-bottom-transition {
//       from {
//         transform: translate(0, 0);
//       }
//       to {
//         transform: translate(-50%, 0);
//       }
//     }
//   `}

//   ${(props) =>
//     props.orientation.includes('left') &&
//     `
//     left: 0;
//     animation: stroke-left-transition 30s 0s infinite linear;
//     @keyframes stroke-left-transition {
//       from {
//         transform: translate(0, 0);
//       }
//       to {
//         transform: translate(0, -50%);
//       }
//     }
//   `}

//   ${(props) =>
//     props.orientation.includes('right') &&
//     `
//     right: 0;
//     animation: stroke-right-transition 30s 0s infinite linear;
//     @keyframes stroke-right-transition {
//       from {
//         transform: translate(0, -50%);
//       }
//       to {
//         transform: translate(0, 0);
//       }
//     }
//   `}
// `;
