
var employeeArrayPrint = [];

function printEmployeeArray(data) {
    const managers = data.filter(employee => employee.getRole() == "Manager");
    const engineers = data.filter(employee => employee.getRole() == "Engineer");
    const interns = data.filter(employee => employee.getRole() == "Intern");
   
    for (let i = 0; i < managers.length; i++) {
        var thisManager = managers[i];
        var thisManagerHTML = `<div class="p-4 border border-primary border-3 m-4 text-bg-success rounded-3 shadow-lg">
        <h2>${thisManager.getName()}</h2>
        <h3>Manager</h3>
        <div class="text-bg-light p-3 border rounded-2 shadow">
            <p class="border-bottom pb-3">Id: ${thisManager.getId()}</p>
            <p class="border-bottom pb-3">Email: <a href="mailto:${thisManager.getEmail()}">${thisManager.getEmail()}</a> </p>
            <p class="border-bottom pb-3">Office Number: ${thisManager.getOfficeNumber()}</p>
        </div>
    </div>`;
        employeeArrayPrint.push(thisManagerHTML);
    }

    for (let i = 0; i < engineers.length; i++) {
        var thisEngineer = engineers[i];
        var thisEngineerHTML = `<div class="p-4 border border-primary border-3 m-4 text-bg-success rounded-3 shadow-lg">
        <h2>${thisEngineer.getName()}</h2>
        <h3>Engineer</h3>
        <div class="text-bg-light p-3 border rounded-2 shadow">
            <p class="border-bottom pb-3">Id: ${thisEngineer.getId()}</p>
            <p class="border-bottom pb-3">Email: <a href="mailto:${thisEngineer.getEmail()}">${thisEngineer.getEmail()}</a></p>
            <p class="border-bottom pb-3">Github: <a href="https://github.com/${thisEngineer.getGithub()}">${thisEngineer.getGithub()}</a></p>
        </div>
    </div>`;
        employeeArrayPrint.push(thisEngineerHTML);
    }

    for (let i = 0; i < interns.length; i++) {
        var thisIntern = interns[i];
        var thisInternHTML = `<div class="p-4 border border-primary border-3 m-4 text-bg-success rounded-3 shadow-lg">
        <h2>${thisIntern.getName()}</h2>
        <h3>Intern</h3>
        <div class="text-bg-light p-3 border rounded-2 shadow">
            <p class="border-bottom pb-3">Id: ${thisIntern.getId()}</p>
            <p class="border-bottom pb-3">Email: <a href="mailto:${thisIntern.getEmail()}">${thisIntern.getEmail()}</a></p>
            <p class="border-bottom pb-3">School: ${thisIntern.getSchool()}</p>
        </div>
    </div>`;
        employeeArrayPrint.push(thisInternHTML);
    }

}

function createHTML() {
    const html = employeeArrayPrint.join("\n");
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <title>My Team Profile</title>
    </head>
    <body>
        <header class="container-fluid bg-primary p-3 text-white">
            <h1 class="text-center">My Team</h1>
        </header>
        <section class="d-flex justify-content-center flex-wrap">
            ${html}
        </section>
        
    </body>
    </html>`;

}

module.exports = {
    employeeArrayPrint,
    printEmployeeArray,
    createHTML

};


