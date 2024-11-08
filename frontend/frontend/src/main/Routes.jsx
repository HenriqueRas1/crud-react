import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

export default props => 
    <Switch> 
        <Route exact path='/' component={Home} />
        <Route path='/users' component={userCrud} />
    </Switch>





/* 
<Route>: É um componente do React Router que representa uma rota, ou seja, uma URL específica na sua aplicação web.

exact: Essa prop indica que a rota deve corresponder exatamente à URL, sem nenhum caractere a mais ou a menos.

path='/': Define o caminho da URL que essa rota irá atender, nesse caso, a raiz da aplicação (/).

component={Home}: Especifica qual componente React será renderizado quando essa rota for acessada. 
Nesse caso, o componente Home será exibido quando o usuário acessar a URL raiz.
*/ 