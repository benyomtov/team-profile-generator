
var employeeArrayPrint = [];

function printEmployeeArray(data) {
    const managers = data.filter(employee => employee.getRole() == "Manager");
    const engineers = data.filter(employee => employee.getRole() == "Engineer");
    const interns = data.filter(employee => employee.getRole() == "Intern");
   
    for (let i = 0; i < managers.length; i++) {
        var thisManager = managers[i];
        var thisManagerHTML = `<div>
        <h2>${thisManager.getName()}</h2>
        <h3>Manager</h3>
        <div>
            <p>Id: ${thisManager.getId()}</p>
            <p>Email: <a href="mailto:${thisManager.getEmail()}">${thisManager.getEmail()}</a> </p>
            <p>Office Number: ${thisManager.getOfficeNumber()}</p>
        </div>
    </div>`;
        employeeArrayPrint.push(thisManagerHTML);
    }

    for (let i = 0; i < engineers.length; i++) {
        var thisEngineer = engineers[i];
        var thisEngineerHTML = `<div>
        <h2>${thisEngineer.getName()}</h2>
        <h3>Engineer</h3>
        <div>
            <p>Id: ${thisEngineer.getId()}</p>
            <p>Email: <a href="mailto:${thisEngineer.getEmail()}">${thisEngineer.getEmail()}</a></p>
            <p>Github: <a href="https://github.com/${thisEngineer.getGithub()}">${thisEngineer.getGithub()}</a></p>
        </div>
    </div>`;
        employeeArrayPrint.push(thisEngineerHTML);
    }

    for (let i = 0; i < interns.length; i++) {
        var thisIntern = interns[i];
        var thisInternHTML = `<div>
        <h2>${thisIntern.getName()}</h2>
        <h3>Intern</h3>
        <div>
            <p>Id: ${thisIntern.getId()}</p>
            <p>Email: <a href="mailto:${thisIntern.getEmail()}">${thisIntern.getEmail()}</a></p>
            <p>School: ${thisIntern.getSchool()}</p>
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
        <title>My Team Profile</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <section>
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


