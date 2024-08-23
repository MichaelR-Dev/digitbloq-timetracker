
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import MainView from './components/MainView/MainView.tsx';

function App() {
  return (
    <div className="App">
      <WrappedApp />
    </div>
  );
}

function WrappedApp({ Component, pageProps }) {
  return (
      <PrimeReactProvider>
        <MainView />
      </PrimeReactProvider>
  );
}

export default App;
