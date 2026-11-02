"use strict";

class InvalidKeyError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidKeyError";
    }
}

class VaultLockedError extends Error {
    constructor(message) {
        super(message);
        this.name = "VaultLockedError";
    }
}

function accessVault(key) {
    if (key === undefined || Number.isNaN(key)) {
        throw new InvalidKeyError("Key is missing or corrupted");
    }

    if (key !== "SECRET_123") {
        throw new VaultLockedError("Incorrect key provided");
    }

    return "Access Granted";
}

function attemptEntry(key) {
    try {
        console.log(accessVault(key));
    } catch (e) {
        if (e instanceof InvalidKeyError) {
            console.log("Security Alert: System corruption detected.");
        } else if (e instanceof VaultLockedError) {
            console.log("User Error: Please try again.");
        } else {
            throw e;
        }
    } finally {
        console.log("Vault attempt completed.");
    }
}

function testAccessGranted() {
    return accessVault("SECRET_123") === "Access Granted";
}

function testInvalidKey(key) {
    try {
        accessVault(key);
        return false;
    } catch (e) {
        return e instanceof InvalidKeyError;
    }
}

function testVaultLocked() {
    try {
        accessVault("WRONG_KEY");
        return false;
    } catch (e) {
        return e instanceof VaultLockedError;
    }
}

function runTests() {
    console.log("Starting Vault Tests...");
    console.log("Correct key:", testAccessGranted() ? "PASSED" : "FAILED");
    console.log("Undefined key:", testInvalidKey(undefined) ? "PASSED" : "FAILED");
    console.log("NaN key:", testInvalidKey(NaN) ? "PASSED" : "FAILED");
    console.log("Wrong key:", testVaultLocked() ? "PASSED" : "FAILED");
}

console.log("--- Automated Tests ---");
runTests();

console.log("\n--- Manual Tests ---");
attemptEntry("SECRET_123");
attemptEntry("");
attemptEntry(12345);
attemptEntry(null);
attemptEntry({});
attemptEntry([]);
attemptEntry(NaN);
