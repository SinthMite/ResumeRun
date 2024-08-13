import { Routes, Route } from 'react-router-dom';
import { Bar } from './Start/Bar/Bar';
import { Home } from './Start/Pages/Home';
import { About } from './Start/Pages/About';
import { Pricing } from './Start/Pages/Pricing';
import { FAQ } from './Start/Pages/FAQ';
import { Contact } from './Start/Pages/Contact';
import { AppRR } from './AppRR/AppRR';
import { LogInProvider, useLogInState } from './State/State'; // Adjust the import path accordingly
import './App.scss';

function App() {
  const { logIn } = useLogInState(); // Get logIn from the context

  return (
    <LogInProvider> {/* Wrap the App component in the LogInProvider */}
      {!logIn ? (
        <div className="subtle-gradient-bg">
          <div className="StarterBar">
            <Bar />
          </div>
          <div className="StarterLinks">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      ) : (
        <div className="AppRR">
          <AppRR />
        </div>
      )}
    </LogInProvider>
  );
}

export default App;
