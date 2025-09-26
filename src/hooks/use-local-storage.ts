'use client';

import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type SetValue<T> = Dispatch<SetStateAction<T>>;

function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      // Next.js with React 18 needs special handling for Set
      if (item) {
        const parsed = JSON.parse(item);
        if (Array.isArray(parsed)) {
            return new Set(parsed) as T;
        }
        return parsed;
      }
      return initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue: SetValue<T> = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        let itemToStore = valueToStore;
        // Special handling for Set
        if (valueToStore instanceof Set) {
            itemToStore = Array.from(valueToStore.values()) as T;
        }
        window.localStorage.setItem(key, JSON.stringify(itemToStore));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const item = window.localStorage.getItem(key);
      if (item) {
        try {
            const parsed = JSON.parse(item);
             if (Array.isArray(parsed)) {
                setStoredValue(new Set(parsed) as T);
            } else {
                setStoredValue(parsed);
            }
        } catch (error) {
            console.error(error);
        }
      }
    }
  }, [key]);


  return [storedValue, setValue];
}

export default useLocalStorage;
