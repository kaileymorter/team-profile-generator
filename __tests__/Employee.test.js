const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const employee = new Employee('Kailey Morter', '123', 'k_morter@outlook.com');

    expect(employee.name).toBe('Kailey Morter');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('k_morter@outlook.com');
})

test('gets employeee name', () => {
    const employee = new Employee('Kailey Morter', '123', 'k_morter@outlook.com');

    expect(employee.getName()).toEqual(expect.stringContaining('Kailey Morter'));
})

test('gets employeee id', () => {
    const employee = new Employee('Kailey Morter', '123', 'k_morter@outlook.com')

    expect(employee.getId()).toEqual(expect.stringContaining('123'));
})

test('gets employee email', () => {
    const employee = new Employee('Kailey Morter', '123', 'k_morter@outlook.com')

    expect(employee.getEmail()).toEqual(expect.stringContaining('k_morter@outlook.com'));
})

test("gets employee's role", () => {
    const employee = new Employee('Kailey Morter', '123', 'k_mortter.outlook');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});