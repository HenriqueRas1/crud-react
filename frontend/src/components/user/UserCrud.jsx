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
        const user = { ...this.state.user }  // 1. Cria uma cópia do state (user)
        user[event.target.name] = event.target.value // 2. Atualiza o valor do campo específico
        this.setState({ user }) // 3. Atualiza o state com o objeto modificado
    }

    renderForm() {  //render de form
        return (
            <div className="form">
                <div className="row"> 
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder='Digite o nome...' />
                        </div>
                    </div>
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>E-mail</label>
                        <input type="text" className="form-control"
                        name="email"
                        input={this.state.user.email}
                        onChange={e => this.updateField(e)}
                        placeholder='Type your email here'
                        />
                            
                    </div>
                </div>
                </div>
                <hr /> 
                <div className="row"> 
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary">
                            Salvar
                        </button>
                    </div>
                </div>
            </div>
        )
    }


    render() {
        return (
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}


