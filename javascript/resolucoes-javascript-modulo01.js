// exercicio 3
var skills = ["js", "react", "native"];

// resposta 1
function temHabilidade(skill){
    (skills.indexOf(skill)) != -1 ? true : false
}

temHabilidade(skill)

// resposta 2
function temHabilidade(skill){
    if(skills.indexOf(skill) != -1) {
        return true;
    } else {
        return false;
    } 
}

temHabilidade(skill)

// exercicio 4
var anosEstudo = 7;
function experiencia(anos) {
    switch(anos) {
        case (anos >= 0 || anos == 1):
            return 'Iniciante';
        case (anos == 2 || anos == 3):
            return 'Intermediário';
        case (anos == 4 || anos == 5 || anos == 6):
            return 'Avançado';
        case (anos == 7):
            return 'Jedi';
        default:
            return false;
    }
}
   
experiencia(anosEstudo);
  
// exercício 5
var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

// resposta 1
`O ${usuario[0].nome} possui as habilidades: ${usuarios.habilidades[0]}, ${usuarios.habilidades[1]}, ${usuarios.habilidades[2]}`

// resposta 2
for(let usuario of usuarios){
    `O ${usuario.nome} possui as habilidades: ${usuario.habilidades.join(", ")}`
}