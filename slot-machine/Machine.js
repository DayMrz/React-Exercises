class Machine extends React.Component {
  render() {
    const { slot1, slot2, slot3 } = this.props
    const winner = (slot1 === slot2) && (slot2 === slot3)
    return (
    <div className="Machine">
      <ul className="list">
        <li>{slot1}</li>
        <li>{slot2}</li>
        <li>{slot3}</li>
      </ul>
      <label className="result" htmlFor="textInput">
        {winner ? 'You Win!' : 'You Loose!'} 
      </label>
    </div>
    )
  }
}