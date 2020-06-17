import React, { useState, Fragment } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Clear from './components/Clear';
import Alert from './components/Alert';
import Users from './components/Users';
import User from './components/User';
import Repos from './components/Repos';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './components/About';
import axios from 'axios'

const App = props => {
  let githubClientID;
  let githubClientSecret;
  if (process.env.NODE_ENV !== 'production') {
    githubClientID = process.env.REACT_APP_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_CLIENT_SECRET
  }
  else {
    githubClientID = process.env.CLIENT_ID;
    githubClientSecret = process.env.CLIENT_SECRET
  }
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [alertVar, setAlert] = useState(false)
  const [user, setUser] = useState([])
  const [repos, setRepos] = useState([])

  const SearchString = async (text) => {
    if (text === '') {
      setAlert(true);
    }
    setLoading(true)
    const res = await axios
      .get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientID}&client_secret=${githubClientSecret}`);
    setAlert(false);
    setUsers(res.data.items)
    setLoading(false);
  }

  const getUser = async username => {
    setLoading(true)
    const res = await axios
      .get(`https://api.github.com/users/${username}?client_id=${githubClientID}&client_secret=${githubClientSecret}`);
    setAlert(false);
    setUser(res.data)
    setLoading(false);

  }

  const getUserRepos = async username => {
    setLoading(true)
    const res = await axios
      .get(`https://api.github.com/users/${username}/repos?sort=created&client_id=${githubClientID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);
    setAlert(false);
    setRepos(res.data)
    setLoading(false);
  }
  const clearUsers = () => {
    setUsers([])
  }


  return (

    <Router>
      <Switch>
        <div className="App">
          <Navbar />
          <div className="container">
            <Route exact path="/" render={(props) => (
              <Fragment>
                <Search searchUser={SearchString} />
                <Alert isSearchEmpty={alertVar} />
                <Clear clearUsers={clearUsers} showClear={users.length > 0 ? true : false} />
                <Users key={users.id} users={users} loading={loading} isSearchEmpty={alertVar} />
              </Fragment>
            )} />
            <Route exact path="/about" component={About} />
            <Route exact path="/user/:login" render={(props) => (
              <Fragment>
                <User {...props} getUser={getUser} user={user} loading={loading} />
                <Repos {...props} getUserRepos={getUserRepos} repos={repos} />
              </Fragment>
            )} />
          </div>
        </div>
      </Switch>
    </Router>

  );

}

export default App;
//.get(`https://api.github.com/search/users?q=brad&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)