import React, { useContext } from 'react'
import Head from './components/head/Head'
import Main from './components/main/Main'
import { ExpenceContext } from './store'
import Registration from './components/registration/Registration'
import Users from './components/users/Users'
import Header from './components/header/Header'

const App = () => {
  const { changePages } = useContext(ExpenceContext)
  return (
    <div>
      <Header />
      {changePages.signIn && <Registration />}
      {changePages.about && <Users />}
      {changePages.home && <> <Main /> <Head /></>}
    </div>
  );
};

export default App