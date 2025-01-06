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

    // incluir um novo user e alterar um user existente
    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }
    // Implementa método para atualizar lista de usuários 
    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if(add) list.unshift(user)
        return list
    }

    updateField(event) {
        const user = { ...this.state.user } //cria copia 
    }


    render() {
        return (
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}


