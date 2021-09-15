import React, { Component } from 'react';
// import {NavLink,Route,Switch,withRouter} from 'react-router-dom';
import {NavLink,withRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import routes from './router';

class App extends Component {
    
    goHome = () => {
        const {replace} = this.props.history;
        replace('/');
        // console.log(this.props);
    }
    render() {
        const id = 1;
        return (
            <div>
                {/* <BrowserRouter> */}
                    {/* <Link to="/">首页</Link>
                    <Link to="/about">关于</Link> */}
                    {/* <NavLink exact to="/" activeStyle={{color: 'red'}}>首页</NavLink>
                    <NavLink to="/about" activeStyle={{color: 'red'}}>关于</NavLink> */}

                    <NavLink exact to="/" activeClassName="link-active">首页</NavLink>
                    <NavLink to={`/about/${id}`} activeClassName="link-active">关于</NavLink>
                    <NavLink to="/my?name=kyrie&age=18" activeClassName="link-active">我的</NavLink>
                    <NavLink to={{pathname:'detail',state: {name: 'kyrie',age: 18}}} activeClassName="link-active">详情</NavLink>
                    
                    <button onClick={this.goHome}>回首页</button>

                    {/* <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about/:id" component={About}/>
                        <Route path="/my" component={My}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/detail" component={Detail}/>
                    </Switch> */}
                {/* </BrowserRouter> */}
                {renderRoutes(routes)}
            </div>
        )
    }
}

export default withRouter(App);