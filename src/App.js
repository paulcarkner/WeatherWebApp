import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Testing</h1>
      <h2>Start editing to see some magic happen!</h2>
    <Map />
    </div>
  );
}

class Map extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (<div>hello you!</div>);
    }
}