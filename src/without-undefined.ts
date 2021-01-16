// Removes optional prop as well as undefined type.
export type WithoutUndefined<T> = {
    [K in keyof T]-?: Exclude<T[K], undefined>
}
