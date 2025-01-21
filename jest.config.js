// module.exports = {
// 	testEnvironment: 'jest-environment-jsdom',
// 	setupFilesAfterEnv: ['<rootDir>/'],
// }
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
}
