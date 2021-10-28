import { DrumMachine } from './components/DrumMachine';
import Store from './Store';

function App() {
  return (
    <Store>
      <div className="flex justify-center items-center min-h-screen bg-app bg-cover bg-no-repeat bg-center font-ds">
        <DrumMachine />
      </div>
    </Store>
  );
}

export default App;
