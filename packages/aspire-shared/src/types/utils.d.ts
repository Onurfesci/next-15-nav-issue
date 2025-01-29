type PropsWithComponent<
  T,
  C extends ComponentType = undefined,
> = C extends undefined
  ? Omit<T, 'component'>
  : T & { component: C } & React.ComponentProps<C>;

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
