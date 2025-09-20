import { readonly, ref } from 'vue';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'artem-portfolio-theme';

const getPreferredTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};

const themeRef = ref<Theme>(getPreferredTheme());

const applyTheme = (theme: Theme) => {
  if (typeof document === 'undefined') return;
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
};

export const applySavedTheme = () => {
  applyTheme(themeRef.value);
};

export const useTheme = () => {
  const setTheme = (value: Theme) => {
    themeRef.value = value;
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, value);
    }
    applyTheme(value);
  };

  const toggleTheme = () => {
    setTheme(themeRef.value === 'light' ? 'dark' : 'light');
  };

  return {
    theme: readonly(themeRef),
    setTheme,
    toggleTheme
  };
};
