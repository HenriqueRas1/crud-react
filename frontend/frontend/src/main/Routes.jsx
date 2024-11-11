import { Routes, Route } from "react-router-dom";



import Home from '../components/home/Home'
import UserCrud from './components/user/UserCrud.jsx'


export default props => (
    <Routes> 
        <Route exact path="/" element={<Home />} />
        <Route path="./users" element={<UserCrud />} />
        <Route path="*" element={<Home />} />
    </Routes>
);




/* 
<Route>: É um componente do React Router que representa uma rota, ou seja, uma URL específica na sua aplicação web.

exact: Essa prop indica que a rota deve corresponder exatamente à URL, sem nenhum caractere a mais ou a menos.

path='/': Define o caminho da URL que essa rota irá atender, nesse caso, a raiz da aplicação (/).

component={Home}: Especifica qual componente React será renderizado quando essa rota for acessada. 
Nesse caso, o componente Home será exibido quando o usuário acessar a URL raiz.
*/ 