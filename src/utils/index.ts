export const getLevel = (): number => {
  return Math.floor(
    (new Date().getTime() - new Date(1999, 8, 2).getTime()) /
      1000 /
      60 /
      60 /
      24 /
      365
  );
};

export const cn = (...classes: (string | undefined)[]): string => {
  return classes.filter(Boolean).join(' ');
};

export const isSamePath = (base: string, fullPath: string): boolean => {
  if (base === '/') {
    return fullPath === '/';
  }

  return fullPath.startsWith(base);
};

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString(undefined, {
    year: 'numeric',
    weekday: 'long',
    month: 'long',
    day: '2-digit',
  });
};
