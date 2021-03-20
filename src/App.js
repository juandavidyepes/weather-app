import './App.scss';
import TopBanner from './components/TopBanner/TopBanner';
import ThreeDays from './components/ThreeDays/ThreeDays';
import PlaceVisit from './components/PlaceVisit/PlaceVisit';
import Cities from './components/Cities/Cities';

function App() {
  return (
    <div className='App'>
      <TopBanner />
      <ThreeDays />
      <PlaceVisit />
      <Cities />
    </div>
  );
}

export default App;
