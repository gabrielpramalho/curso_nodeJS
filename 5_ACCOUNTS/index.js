const inquirer = require('inquirer');
const chalk = require("chalk")

const fs = require("fs");
const Choices = require('inquirer/lib/objects/choices');

operation()

function operation(){

    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'O que você deseja fazer?',
            choices: [
                'Criar Conta',
                'Consutar Saldo',
                'Depositar',
                'Sacar',
                'Sair'
            ]
        },
    ]).then((answer) => {
        

        const action = answer['action']
        console.log(action);

    })
    .catch((err) => console.log(err))

}