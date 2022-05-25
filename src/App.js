import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { UserList } from './components/UserList';
import { UserProfile } from './components/UserProfile';


function App() {
  return (
      <div className='App'>

        <Header/>

        <main className='main'>
          <Routes>
            <Route className='user__list' path='/' element={ <UserList/> }></Route>
            <Route className='user__visit' path=':id' element={ <UserProfile/> }></Route>
          </Routes>
        </main>

        <footer></footer>

      </div>
  );
}

export default App;
