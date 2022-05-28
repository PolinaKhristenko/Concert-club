import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { UserList } from './components/UserList';
import { UserProfile } from './components/UserProfile';
import { AllPosts } from './components/AllPosts';
import { Post } from './components/Post';
import { NotFound } from './components/NotFound';


function App() {
  return (
      <div className='App'>

        <Header/>

        <main className='main'>
          <Routes>
            <Route exact path='/' element={ <UserList/> }></Route>
            <Route path='/:userId' element={ <UserProfile/> }></Route>
            <Route path='/:userId/posts' element={ <AllPosts/> }></Route>
            <Route path='/:userId/posts/:postId' element={ <Post/> }></Route>
            <Route path='/404' element={ <NotFound/> }></Route>
          </Routes>
        </main>

        <footer></footer>

      </div>
  );
}

export default App;
