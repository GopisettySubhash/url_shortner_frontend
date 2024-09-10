import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from "./components/home/Home";
import {theme} from "./components/utils/Theme";

function App() {

    const THEME = createTheme(theme);


    return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
