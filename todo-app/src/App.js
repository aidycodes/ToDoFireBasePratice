import './index.css'
import './App.css';

import AppRoutes from './routes';
import { ProvideAuth } from "./firebase/use-auth.js";


function App(props) {
  return (
    <ProvideAuth>
    <div className="App">
      
        <AppRoutes/>
    </div>
    </ProvideAuth>
  );
}

export default App;
