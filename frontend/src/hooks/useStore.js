"use client";

import { useState, useEffect } from "react";

const useStore = (store, callback) => {
  const result = store(callback);
  const [data, setData] = useState();

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};

export default useStore;

/*
Uso
import useThemeStore from './themeStore';

const MyComponent = () => {
  const theme = useStore(useThemeStore, state => state.theme);

  // Resto del componente...
};
*/

/*
import { useState, useEffect } from 'react';

const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F
) => {
  const result = store(callback) as F;
  const [data, setData] = useState<F>();

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};
*/
