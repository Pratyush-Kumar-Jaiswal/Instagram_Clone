import './App.css';
import LeftSide from './Component/leftSide';

function App() {
  return (
    <div className="App">
      <div className="leftSide">
        <LeftSide/>
      </div>
      <div className="middleSide">
        Middle
      </div>
      <div className='rightSide'>
        Right
      </div>
    </div>
  );
}
export default App;