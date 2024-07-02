import './App.css';
import LeftSide from './Component/leftSide';
import MiddleSide from './Component/middleSide';

function App() {
  return (
    <div className="App">
      <div className="leftSide">
        <LeftSide/>
      </div>
      <div className="middleSide">
        <MiddleSide/>
      </div>
      <div className='rightSide'>
        Right
      </div>
    </div>
  );
}
export default App;