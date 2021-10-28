import { CreditBox } from './components/CreditBox';
import { DrumMachine } from './components/DrumMachine';
import Store from './Store';

function App() {
  return (
    <Store>
      <div className="flex flex-col justify-center items-center space-y-2 min-h-screen bg-app bg-cover bg-no-repeat bg-center font-ds">
        <DrumMachine />
        <CreditBox />
      </div>
    </Store>
  );
}

export default App;
