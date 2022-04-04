import { Fragment } from 'react';
import Header from './components/Header';
import Auth from './components/Auth';
import Counter from './components/Counter';
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile';


function App() {
  const isAuth = useSelector((state) => state.auth.isauthenticated);
  return (
    <Fragment>
    <Header />
    {!isAuth && <Auth />}
    {isAuth && <UserProfile />}
    {isAuth && <Counter />}
    </Fragment>
  );
}

export default App;
