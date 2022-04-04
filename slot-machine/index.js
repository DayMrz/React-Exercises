function slot() {
  const fruit = ['🍇', '🍊', '🍒']
  return fruit[Math.floor(Math.random() * fruit.length) ]
}

class App extends React.Component {
  render() {
 
    return ( 
      <div>
        <h1> Slot Machine!</h1>

        <Machine 
          slot1={slot()}
          slot2={slot()}
          slot3={slot()}
        />
        <Machine 
          slot1={slot()}
          slot2={slot()}
          slot3={slot()}
        />
        <Machine 
          slot1={slot()}
          slot2={slot()}
          slot3={slot()}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))