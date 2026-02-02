import  NavBanner  from './components/NavBanner';
import { navLinks } from './config/navConfig'; // Import your "One Source of Truth"

function App() {
  // This is where you'll eventually add states like:
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {/* Hand the data from the config to the component via props */}
      <NavBanner navLinks={navLinks} /> 
      
      <main>
        <h2>Welcome to CommonCents</h2>
        {/* Your other page content goes here */}
      </main>
    </>
  )
}

export default App;