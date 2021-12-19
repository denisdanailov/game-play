
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Registe';

function App() {
  return (
    <div id="box">
      <Header />


      <main id="main-content">
        <Home />
        <Login />
        <Register />
      </main>

    </div>
  );
}

export default App;
