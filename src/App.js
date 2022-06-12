import logo from './logo.svg';
import './App.css';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function App() {
  return (
    <div className="App">
      <VerticalTimeline layout={"2-columns"}>
        <VerticalTimelineElement className="vertical-timeline-element--work">
          helo
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default App;
