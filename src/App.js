import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { UserList } from './components/UserList';
import { UserProfile } from './components/UserProfile';
import { AllPosts } from './components/AllPosts';
import { Post } from './components/Post';


function App() {
  return (
      <div className='App'>

        <Header/>

        <main className='main'>
          <Routes>
            <Route exact path='/' element={ <UserList/> }></Route>
            <Route path='/:userId' element={ <UserProfile/> }></Route>
            <Route path='/:userId/posts' element={ <AllPosts/> }></Route>
            <Route path='/:userId/posts/post' element={ <Post/> }></Route>
          </Routes>
        </main>

        <footer></footer>

      </div>
  );
}

export default App;
