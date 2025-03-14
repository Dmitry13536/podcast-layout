import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Feedback from './components/Feedback';
import Tarif from './components/Tarif';
import Quote from './components/Quote';
import Questions from './components/Questions';
import Courses from './components/Courses';
import Line from './components/Line';
import Benefits from './components/Benefits';
import Start from './components/Start';
import Description from './components/Description';
import Next from './components/Next';
import Last from './components/Last';

function App() {
  return (
    <div className="App">
      <Header />
      <Start />
      <Description />
      <Next />
      <Last />
      <Line />
      <Benefits />
      <Courses />
      <Quote />
      <Questions />
      <Tarif />
      <Feedback /> 
      <Footer />
    </div>
  );
}

export default App;