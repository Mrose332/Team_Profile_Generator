
const generateManager = function (manager) {
    return `

    <div class="container">
    <div id="box-1">
        <h3>${manager.name}</h3>
        <h4>Manager<h4>

            <p>Id: ${manager.id}</p>
            <p>Email: ${manager.email}</p>
            <p>Office Number: ${manager.officeNumber}</p>
    </div>
    `;
}

const generateEngineer = function (engineer) {
    return `
<div id="box-2">
    <h3>${engineer.name}</h3>
          
    <h4>Engineer<h4>
    <p>Id: ${engineer.id}</p>
    <p>Github Username:  ${engineer.github}</p>
    <p> Email:${engineer.email} </p>

</div>
`;
}

const generateIntern = function (intern) {
    return `

    <div id="box-3">
    <h3>${intern.name}</h3>
    <h4>Intern<h4>
        <p> Id:${intern.id}</p>
        <p> Email: ${intern.email}</p>
        <p> School:${intern.school} </p>
    </div>

    `
};


module.exports = {
	generateIntern,
	generateEngineer,
	generateManager
}

