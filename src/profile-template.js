//create employee profiles
const generateProfile = teamProfileData => {
    const manager = teamProfileData.manager.map(function (employee){
        return `
            <div class="card col-sm-3 m-1" style="width: 18rem;">
                <div class="p-2">
                    <h2>${employee.name}</h2>
                    <h4>Manager</h4>
                    <p>ID: ${employee.id}</p>
                    <p>Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
                    <p>Office Number: ${employee.officeNumber}</p>
                </div> 
            </div>
        `
    })
    const engineer = teamProfileData.engineer.map(function (employee){
        return `
            <div class="card col-sm-3 m-1" style="width: 18rem;">
                <div class="p-2">
                    <h2>${employee.name}</h2>
                    <h4>Engineer</h4>
                    <p>ID: ${employee.id}</p>
                    <p>Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
                    <p> Github: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></p>
                </div>
            </div>
        `
    })
    .join('')
    const intern = teamProfileData.intern.map(function (employee){
        return `
            <div class="card col-sm-3 m-1" style="width: 18rem;">
                <div class="p-2">
                    <h2>${employee.name}</h2>
                    <h4>Intern</h4>
                    <p>ID: ${employee.id}</p>
                    <p>Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
                    <p>School: ${employee.school}</p>
                </div>
            </div>
        `
    })
    .join('')
    return manager + engineer + intern
}


module.exports = templateData => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            <title>My Work Team</title>
        </head>
        <body class="bg-light">
            <header>
            <h1 class="text-center bg-primary text-light p-3">My Work Team</h1>
            </header>
            <main class="container">
                <div class="row justify-content-center">
                ${generateProfile(templateData)}
                <div>
            </main>
        </body>
        </html>    
        `
}