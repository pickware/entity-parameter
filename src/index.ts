import { AddUndefinedToNullables } from "./add-undefined-to-nullables"
import { WithoutFunctions } from "./without-functions"
import { WithoutUndefined } from "./without-undefined"

/**
 * Type to be used for Entity constructor argument.
 *
 * - Removes fields with function type.
 *      - Methods are not persisted in the database.
 * - Adds optional modifier to nullable fields.
 *      - So that they can be omitted on object creation.
 */
export type EntityParameter<T> = AddUndefinedToNullables<WithoutFunctions<T>>

/**
 * Type to be used for Entity constructor argument.
 *
 * Like `EntityParameter<T>` but removes all original undefined modifiers.
 * Those are most likely used by relations that may not be loaded for a request, but must be given as a parameter.
 */
export type EntityParameterStrict<T> = AddUndefinedToNullables<WithoutUndefined<WithoutFunctions<T>>>

export * from "./add-undefined-to-nullables"
export * from "./without-functions"
export * from "./without-undefined"