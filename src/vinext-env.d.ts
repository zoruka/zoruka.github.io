declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.scss' {}

declare module 'next' {
  export type { Metadata } from 'vinext/shims/metadata';
}

declare module 'next/link' {
  export { default } from 'vinext/shims/link';
}

declare module 'next/navigation' {
  export * from 'vinext/shims/navigation';
}

declare module 'next/font/google' {
  type FontOptions = {
    weight?: string | string[];
    subsets?: string[];
    variable?: string;
    display?: string;
  };

  type FontResult = {
    className: string;
    style: React.CSSProperties;
    variable: string;
  };

  export function Press_Start_2P(options: FontOptions): FontResult;
  export function DM_Sans(options: FontOptions): FontResult;
  export function DM_Mono(options: FontOptions): FontResult;
}
