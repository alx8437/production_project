import {Suspense, useState} from "react";
import {Link, Route, Routes} from "react-router-dom";
import './styles/index.scss'
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

const App = () => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT)

  const toggleTheme = () => setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPageAsync/>}></Route>
          <Route path='/' element={<MainPageAsync />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
