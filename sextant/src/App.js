import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import ipify from 'ipify';
console.log(await ipify());

function App() {
  return (
    <div className="App">
        <Banner bannerText="Sextant" />
        <Exhibit name="Exhibit one">Exhibit one contents</Exhibit>
        <Exhibit name="Exhibit two">Exhibit two contents</Exhibit>
        <Exhibit name="Exhibit three">Exhibit three contents</Exhibit>
    </div>
  );
}

export default App;
