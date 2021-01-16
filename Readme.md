# Entity Parameter

This library provides opinionated helper types for entity construction in any ORM.

- `EntityParameter<T>`
    - Removes fields with function type
        - Methods are not persisted in the database.
    - Adds optional modifier to nullable fields.
        - So that they can be omitted on object creation.

- `EntityParameterStrict<T>`
    * Like `EntityParameter<T>` but removes all optional modifiers.
        * Those are most likely used by relations that may not be loaded for a request, but must be given as a parameter
          in this case.


## Installation

- `npm i --save-dev entity-parameter`
- `yarn add -D entity-parameter`

**Note**: `strictNullChecks` must be enabled for this library to work properly.


## Usage


```typescript
import { EntityParameter, EntityParameterStrict } from "./src"

class User {
    private id?: string

    public name: string

    // This property will be optional in the parameter.
    public address: string | null

    // Relations are assumed to be possibly undefined as they must be loaded explicit with find options.
    public friend?: User

    constructor(params: EntityParameter<User>) {
        this.name = params.name
        this.address = params.address || null
        this.friends = params.friends
    }

    public static strictCreate(params: EntityParameterStrict<User>) {
        return new User(params)
    }

    public getId(){
        return this.id
    }
}

// Error: name is missing.
new User({})

// `address` and `friends` are handled as optional.
new User({
    name: "Rolf"
})

new User({
    name: "Rolf",
    address: "Somewhere",
})

// Minimal example for strict parameter.
User.strictCreate({
    name: "Rolf",
    friend: new User({name: "Hauke"}),
})
```

