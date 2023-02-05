const generateManager = function (manager) {
    return `

    <div class="container">
    <div id="box-1">
        <h3>${manager.name}</h3>
        <h4>Manager<h4>

            <p>ID: ${manager.id}</p>
            <p>Email: <a href=${manager.email}">${manager.email}</a></p>
            <p>Office Number: ${manager.officeNumber}</p>
    </div>
    `;
}

const generateEngineer = function (engineer) {
    return `

    <h3>${engineer.name}</h3>
          
    <h4>Engineer<h4>
    <p>ID: 0825</p>
    <p> Github: 
    <p>Email: <a href="mailto:${engineer.email}"${engineer.email}</a></p>     

</div>
`;
}

const generateIntern = function (intern) {
    return `

    <div id="box-3">
    <h3>Tony Stark</h3>
    <h4>Intern<h4>
        <p>ID:${intern.id} </p>
        <p class="email"></p>Email: <a href="mailto:${intern.email}">${intern.email}:</a></p>
        <p> School:${intern.school} </p>
    </div>

    `
};