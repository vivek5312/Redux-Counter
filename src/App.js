import {  useSelector } from 'react-redux/es/hooks/useSelector';

import Counter from './components/Counter';
import Header from './components/Header'
import Auth from './components/Auth';

import UserProfile from './components/UserProfile';

function App() {
  const isauth=useSelector(state=>state.auth.isAuthenticated)
  return (
    <>
   
    <Header/>
   {!isauth && <Auth /> } 
   {isauth && <UserProfile/>}
    <Counter />
     
    
   
    </>
  );
}

export default App;
