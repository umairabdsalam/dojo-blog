
import Navbar from './Navbar';
import Home from './Home';

function App() {

  // const title = 'Welcome to the new blog!';
  // const likes = 50;

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
       <Home></Home>
        {/* <h2>{ title }</h2>
        <p>Liked { likes } times. </p> */}
      </div>
    </div>
  );
}

export default App;
