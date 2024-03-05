import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Art } from './layout/sections/art/Art';
import { Create } from './layout/sections/create/Create';
import { Artists } from './layout/sections/artists/Artists';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Art/>
            <Create/>
            <Artists/>
        </div>
    );
}

export default App;
