import  NavBanner  from './components/NavBanner';
import { navLinks } from './config/navConfig';
import './styling/generalStyling.css';

function App() {
  // This is where you'll eventually add states like:
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      
      
      <main>
        <div id="window">
          <h2>Welcome to CommonCents</h2>
          <div id="navigation">
            <NavBanner navLinks={navLinks} /> 
          </div>
        </div>
      </main>
    </>
  )
}

export default App;