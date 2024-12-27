import Header from '../Header';
import Footer from '../Footer';
import NavBar from '../NavBar';
import './App.css';
import { Outlet } from "react-router-dom";

function App({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <div id="root">
        <Header />
        <NavBar />
        <main>
          {children || <Outlet />} 
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;