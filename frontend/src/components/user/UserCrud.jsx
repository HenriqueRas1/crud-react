import React, { Component } from 'react'
import Main from '../template/Main'
import axios from 'axios' // biblioteca http (permite fazer requisições no navegador e no Node.js)


const headerProps = {
    icon: 'Users',
    title: 'Users',
    subtitle: 'Cadastro de usuarios: incluir, Listar, Alterar e Excluir'
}
// gerenciamento de usuarios 
const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: '' },
    list: []
}







// componente de classe para metodo de ciclo de vida react e estado
export default class UserCrud extends Component {
    
    state = {...initialState}

    // limpar a lista de usuario
    clear() {
        this.setState({ user: initialState.user }) 
    }

   


    render() {
        return (
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}


