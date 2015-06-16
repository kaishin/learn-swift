---
title: Enumerations
tags: beginner, tutorial
teaser: "This section explores Enumerations in Swift and what makes them more powerful and flexible than their Objective-C counterparts."
---

### Defining Enumerations

Enumerations, also commonly referred to as *enums*, are a data type that holds a set of named, mutually exclusive values.

Enumerations are declared using the `enum` keyword, with each member preceded by the `case` keyword:

~~~swift
enum WeaponType {
  case Whip
  case Chain
  case Sword
}
~~~

The elements can also be declared in the same line:

~~~swift
enum SubWeaponType {
  case Dagger, Axe, Stopwatch
}
~~~

Use dot syntax to declare a variable or constant enumeration value:

~~~swift
let MagicWhipType = WeaponType.Whip
~~~

If you explicitly set the type of the variable or constant, you can omit the enumeration name in the right-hand side of the assignment:

~~~swift
var ShortChainType: WeaponType = .Chain
~~~

### Switching on Enumeration Values

Enumerations are commonly used in `switch` statements:

~~~swift
let equippedSubWeaponType = SubWeaponType.Dagger

switch equippedSubWeaponType {
case .Dagger:
  println("Keep enemies at a distance.")
case .Axe:
  println("Target airborne enemies.")
case .Stopwatch:
  println("Freeze time!")
}
~~~

### Associated Values

Enumeration members can hold associated values of any type. The type of the associated value should be specified in the enumeration declaration:

~~~swift
enum ItemType {
  case Healing(restoredHearts: Int)
  case Money(amount: Int)
}

let smallHeartType = ItemType.Healing(restoredHearts: 1)
~~~

You can check the associated value of an enumeration using a `switch` statement:

~~~swift
switch smallHeartType {
case .Healing(let restoredHearts):
  println("Restores \(restoredHearts) heart(s).")
case .Money(let amount):
  println("Earns you \(amount) of gold. ")
}
~~~

### Raw Values

Beside associated values, enumeration members can also hold default—or
raw—values. Unlike associated values, each member has always the same raw value
that's specified when the enumeration is declared. To get the raw value of an
enumeration member, use `toRow()`:

~~~swift
enum EnemyType: String {
  case Boss = "Boss"
  case Minion = "Minion"
}

let bossTypeString = EnemyType.Boss.toRaw() // -> "Boss"
~~~

To get an enumeration member from a raw value, use `fromRaw()`:

~~~swift
let minionType = EnemyType.fromRaw("Minion")
~~~

Raw values can be `String`, `Character`, `Int`, or `Float`/`Double`.

