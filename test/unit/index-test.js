jest.mock('../../lib/login', () => jest.fn())
const login = require('../../lib/login'),
    index = require('../../index')

describe('oauth should', () => {
    test('construct using library', async () => {
        expect(index.login).toBe(login)
    })
})