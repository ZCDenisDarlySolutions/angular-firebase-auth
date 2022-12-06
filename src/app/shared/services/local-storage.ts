export const LocalStorage = {
  set(key: string, value: any) {
    window.localStorage.setItem(
      key,
      typeof value === 'object' && value !== null
        ? JSON.stringify(value)
        : value + ''
    );
  },

  remove: (key: string) => window.localStorage.removeItem(key),

  get<T>(key: string): T | null {
    const value = window.localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  },
};
