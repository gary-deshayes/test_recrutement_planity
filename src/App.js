
import './App.css';
import Calendar from './Components/Calendar';
import useWindowDimensions from './useWindowsDimensions';
import FunctionsUtils from './Utils/function'

let input = require('./input.json')
//Trie par heure de départ
input = input.sort(function (a, b) {
  return FunctionsUtils.timeToDate(a.start) - FunctionsUtils.timeToDate(b.start);
})

function App() {
  const size = useWindowDimensions();
  input.forEach((event, index) => {
    //Index 0 commence toujours à 100% de width
    if (index == 0) {
      event.width = '100%'
    } else {
      //Si l'event précédent chevauche l'event actuel alors on lui donne la taille de 50%
      let lastEventWithAddedMinutes = FunctionsUtils.timeToDate(input[index - 1].start).getTime() + event.duration + 60000
      let currentEventMinutes = FunctionsUtils.timeToDate(event.start).getTime()
      if (lastEventWithAddedMinutes > currentEventMinutes) {
        event.width = 100 / 2 + '%'
      } else {
        event.width = '100%'
      }
    }
    event.height = size.height * 0.05 + (size.height * FunctionsUtils.calcDurationDisplay(event.duration)/ 100)
  
  });

  return (
    <div className="App">
      <Calendar events={input} />
    </div>
  );
}


export default App;
