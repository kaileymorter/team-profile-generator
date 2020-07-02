const Engineer = require('../lib/Engineer');

test('creates a engineer object', () => {
    const engineer = new Engineer('Susie Que', '789', 'susieque@gmail.com', 'susieque');

    expect(engineer.name).toBe('Susie Que');
    expect(engineer.id).toBe('789');
    expect(engineer.email).toBe('susieque@gmail.com');
    expect(engineer.github).toBe('susieque')
})

test('get engineers github username', () => {
    const engineer = new Engineer('Susie Que', '789', 'susieque@gmail.com', 'susieque');

    expect(engineer.github).toEqual(expect.stringContaining('susieque'));
}) 

test('gets engineers role', () => {
    const engineer = new Engineer('Susie Que', '789', 'susieque@gmail.com', 'susieque');

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
})