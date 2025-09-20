export const formatList = (items: string[]) => items.join(' · ');

export const uniqueValues = (arrays: string[][]) => {
  const set = new Set<string>();
  arrays.forEach((arr) => arr.forEach((item) => set.add(item)));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
};

export const normalize = (value: string) => value.toLowerCase();
