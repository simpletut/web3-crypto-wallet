import LandingPage from "./Pages/LandingPage";
import DefaultTemplate from "./Templates/Default";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Web3Provider from './Context/web3/provider';

function App() {
  return (
    <Web3Provider>
      <DefaultTemplate>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Router>
      </DefaultTemplate>
    </Web3Provider>
  );
}

export default App;
