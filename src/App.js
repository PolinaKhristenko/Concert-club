import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='header'>
        <div className='container'>
          <div className='header__body'>
            <a href="/" className='header__logo'><img src={logo} alt='Логотип компании' /></a>

            <div className='header__buttons'>
              <button className='btn__white'>Версия для слабовидящих</button>
              <button className='btn__white'>Мой профиль</button>
            </div>
          </div>
        </div>
      </header>

      <main className='main'>
        
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
