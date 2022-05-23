import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='header'>
        <div className='container'>
          <div className='header__body'>
            <div className='header__logo'>
              <img src={logo} alt='Логотип компании' />
              
              <div className='header__buttons'>
                <button className='btn__white'>Версия для слабовидящих</button>
                <button className='btn__white'>Мой профиль</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
