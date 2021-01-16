// Retrieves all keys of T that have type `Function`.
export type FunctionTypeKeys<T> = Exclude<{
    // eslint-disable-next-line @typescript-eslint/ban-types
    [K in keyof T]: T[K] extends Function ? K : never
}[keyof T], undefined>

// Removes all function props from a type.
export type WithoutFunctions<T> = Omit<T, FunctionTypeKeys<T>>
