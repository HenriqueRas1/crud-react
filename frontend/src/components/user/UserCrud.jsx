import React, { Component } from 'react'
import Main from '../template/Main'
import axios from 'axios' 


const headerProps = {
    icon: 'Users',
    title: 'Users',
    subtitle: 'Cadastro de usuarios: incluir, Listar, Alterar e Excluir'
}
// componente de classe para metodo de ciclo de vida react e estado
export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}


