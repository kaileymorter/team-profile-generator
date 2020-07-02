const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Mary Jane', '234', 'maryjane@gmail.com', 'Harvard University');

    expect(intern.name).toBe('Mary Jane');
    expect(intern.id).toBe('234');
    expect(intern.email).toBe('maryjane@gmail.com');
    expect(intern.school).toBe('Harvard University')
})

test('get interns school', () => {
    const intern = new Intern('Mary Jane', '234', 'maryjane@gmail.com', 'Harvard University');

    expect(intern.school).toEqual(expect.stringContaining('Harvard University'));
}) 

test('get inters role', () => {
    const intern = new Intern('Mary Jane', '234', 'maryjane@gmail.com', 'Harvard University');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
})