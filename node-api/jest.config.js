
module.exports = {
    roots: ['<rootDir>/test'],
    preset:"ts-jest",
    testEnvironment: 'node',
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testMatch: ['**/test/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
    testPathIgnorePatterns: ["/lib/", "/dist/", "/node_modules/"],
    moduleFileExtensions: ["ts", "js", "json", "node"],
    collectCoverage: true,
};