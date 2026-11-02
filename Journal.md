# Phase 1

In this phase, I created the basic vault system using a function called accessVault(). The function checks whether the provided key matches "SECRET_123" and returns either "Access Granted" or "Access Denied". I also enabled strict mode using "use strict";. Strict mode acts as a safety net because it helps catch common coding mistakes, such as accidentally creating undeclared variables. This makes the code safer and easier to debug.

# Phase 2

In this phase, I created two custom error classes called InvalidKeyError and VaultLockedError. Both extend JavaScript's built-in Error class. I updated accessVault() so that missing or corrupted keys throw an InvalidKeyError, while incorrect keys throw a VaultLockedError. A returned value is a normal result that the program can continue using, while a thrown error interrupts normal execution until it is handled. Custom error classes are useful because they allow the program to identify exactly what went wrong instead of treating every problem as the same generic error.

# Phase 3

In this phase, I created the attemptEntry() function using a try, catch, and finally block. The try block attempts to access the vault, while the catch block checks which custom error occurred using instanceof. It displays a different message depending on whether the key was missing or incorrect. The finally block always displays "Vault attempt completed." regardless of the result. Unlike catch, which only runs when an error occurs, finally runs whether the code succeeds or fails. A real-world example would be closing a file after attempting to read it, ensuring that system resources are properly released even if an error occurs.

# Phase 4

In this phase, I created automated test functions to verify that the vault behaves correctly. I tested a correct password, an undefined key, a NaN key, and an incorrect password. Each test reports whether it passed or failed. Automated testing is more reliable than manual testing because it checks the same conditions consistently and reduces the chance of human error. I also learned that when an error is thrown, normal execution stops and moves to the nearest matching catch block. Once the error is handled, the program can continue running.