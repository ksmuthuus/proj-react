

class Counter extends React.Component{

  constructor(props)
  {
    super(props)
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
    this.handleReset = this.handleReset.bind(this)

    this.state={
      counter:0
    }
  }

  componentDidMount(){
    let counter = localStorage.getItem('counter')
    try{
        counter = parseInt(counter,10)
        if(!isNaN(counter)){
          this.setState(() => ({counter}))
        }
    }
    catch(err)
    {
      //Do Nothing
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.counter !== this.state.counter){
      console.log('Backup Done!')
      localStorage.setItem('counter',this.state.counter)
    }
  }

  handleIncrement() 
  {
    this.setState((prevState) => {
      return {counter:prevState.counter + 1}
    })

  }

  handleDecrement()
  {
    this.setState((prevState) => {
      return {counter:prevState.counter - 1}
    })
  }

  handleReset()
  {
    this.setState(() => {
      return {counter:0}
    })
  }

  render()
  {
    return(
      <div>
      <h1>Count: {this.state.counter}</h1>
      <button onClick={this.handleIncrement}>+1</button>
      <button onClick={this.handleReset}>Reset</button>
      <button onClick={this.handleDecrement}> -1</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter/>, document.getElementById('root'))