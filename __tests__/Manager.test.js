const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('John Smith', '456', 'johnsmith@gmail.com', 'A123');

    expect(manager.name).toBe('John Smith');
    expect(manager.id).toBe('456');
    expect(manager.email).toBe('johnsmith@gmail.com');
    expect(manager.officeNumber).toBe('A123')
})

test('gets employees role', () => {
    const manager = new Manager('John Smith', '456', 'johnsmith@gmail.com', 'A123');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
})