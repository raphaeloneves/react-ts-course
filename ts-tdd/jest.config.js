module.exports = {
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.json"
        }
    },
    moduleFileExtension: [
        "ts", "js"
    ],
    transform: {
        "^.+\\.ts?$": "ts-jest"
    },
    testMatch: [
        "**/src/**/*.spec.ts"
    ],
    testEnvironment: "node"
}