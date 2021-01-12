import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './Routes';
import store from './store';
import axios from 'axios';

const setupAxios = () => {
  axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
};

setupAxios();
const configStore = store({}, axios);

function App() {

  return (
    <Provider store={configStore}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

