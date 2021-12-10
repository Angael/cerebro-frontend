import { createApi, createStore, Store } from 'effector';

export interface ISimpleApi<T> {
  set: (data: T) => any;
  merge: (data: T) => any;
}

/**
 * This helper has merge which wont work with simple types
 * @param defaultValue
 */
export const createSimpleStore = <T>(
  defaultValue: T
): [Store<T>, ISimpleApi<T>] => {
  const $store = createStore<T>(defaultValue);

  const api = createApi($store, {
    set: (_, data: T) => data,
    merge: (s, data: T) => ({ ...s, data }),
  });

  // @ts-ignore
  return [$store, api];
};

export interface IBoolApi {
  on: () => void;
  off: () => void;
  toggle: () => void;
  set: (val: boolean) => void;
}

export const createBooleanStore = (
  defaultValue: boolean
): [Store<boolean>, IBoolApi] => {
  const $store = createStore<boolean>(defaultValue);

  const api = createApi($store, {
    on: () => true,
    off: () => false,
    toggle: (prev) => !prev,
    set: (_, value: boolean) => value,
  });

  return [$store, api];
};
