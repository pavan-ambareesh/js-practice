What is destructuring and why is it useful?
    Destructing allows the user to have a singluar property of JSON/Array and use it in any way possible without creating a new variable and it reduces the memory utilisation.
    Destructuring is a way to unpack values from objects or arrays into individual variables in a single line. Instead of writing const name = obj.name; const status = obj.status separately, destructuring lets you write const { name, status } = obj. It's useful because it makes code cleaner, reduces repetition, and allows renaming and default values in the same line. In test automation, destructuring is used constantly when extracting data from API responses and config objects.

What does the spread operator do? Give a testing example.
    Spread operator allows the user to modify the JSON/Array - override the property, add new property, copy it
    The spread operator ... copies all properties of an object or items of an array into a new one. It creates a shallow copy — meaning nested objects are still referenced, not deeply copied. In testing, it's used to create environment-specific configs: const ciConfig = { ...defaultConfig, headless: true } — this takes all default settings and overrides only what's needed for CI without mutating the original config.
    
    Shallow copy trap
    Spread only copies one level deep. If your object has nested objects, the nested ones are still shared references. Modifying a nested property in the copy also changes the original. This is a common bug in test frameworks.

What is the difference between dot notation and bracket notation?
    Dot notation (obj.name) is cleaner and used when you know the property name. Bracket notation (obj["name"]) is used when the property name is dynamic — stored in a variable — or when the key has spaces or special characters. In test frameworks, bracket notation is useful when accessing properties based on runtime values: obj[propertyName] where propertyName changes based on test data.
