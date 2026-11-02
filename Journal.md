# Phase 1

In this phase, I created the basic vault system using a function called accessVault(). The function checks whether the provided key matches "SECRET_123" and returns either "Access Granted" or "Access Denied". I also enabled strict mode using "use strict";. Strict mode acts as a safety net because it helps catch common coding mistakes, such as accidentally creating undeclared variables. This makes the code safer and easier to debug.

# Phase 2

In this phase, I created two custom error classes called InvalidKeyError and VaultLockedError. Both extend JavaScript's built-in Error class. I updated accessVault() so that missing or corrupted keys throw an InvalidKeyError, while incorrect keys throw a VaultLockedError. A returned value is a normal result that the program can continue using, while a thrown error interrupts normal execution until it is handled. Custom error classes are useful because they allow the program to identify exactly what went wrong instead of treating every problem as the same generic error.