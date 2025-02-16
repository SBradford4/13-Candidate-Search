import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  console.log(import.meta.env.VITE_GITHUB_TOKEN)
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
