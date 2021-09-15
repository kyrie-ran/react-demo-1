import React, { Component } from 'react';
import {NavLink,Route,Switch,withRouter} from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import Login from './pages/login';
import My from './pages/my';
class App extends Component {
    goHome = () => {
        const {replace} = this.props.history;
        replace('/');
        // console.log(this.props);
    }
    render() {
        return (
            <div>
                {/* <BrowserRouter> */}
                    {/* <Link to="/">首页</Link>
                    <Link to="/about">关于</Link> */}
                    {/* <NavLink exact to="/" activeStyle={{color: 'red'}}>首页</NavLink>
                    <NavLink to="/about" activeStyle={{color: 'red'}}>关于</NavLink> */}

                    <NavLink exact to="/" activeClassName="link-active">首页</NavLink>
                    <NavLink to="/about" activeClassName="link-active">关于</NavLink>
                    <NavLink to="/my" activeClassName="link-active">我的</NavLink>
                    
                    <button onClick={this.goHome}>回首页</button>

                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/my" component={My}/>
                        <Route path="/login" component={Login}/>
                    </Switch>
                {/* </BrowserRouter> */}
            </div>
        )
    }
}

export default withRouter(App);