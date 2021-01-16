// Retrieves all keys of T that have type `null`.
export type NullTypeKeys<T> = {
    [K in keyof T]: null extends T[K] ? K : never
}[keyof T]

// Returns a type containing all keys of T that have type `null` but with added optional modifier.
export type NullPropsAsOptional<T> = {
    [K in NullTypeKeys<T>]+?: T[K]
}

// Returns a type with all keys of type `null` having an additional optional modifier.
export type AddUndefinedToNullables<T> = Omit<T, keyof NullPropsAsOptional<T>> & NullPropsAsOptional<T>
