
const { Component } = React;


class App extends Component{
    constructor(props){
        super(props);
        this.state={
            number:0
        }
    }
    increment(){
        this.setState({
            number:this.state.number+1
        });

    }
    decrement(){
        this.setState({
            number:this.state.number-1
        });
    }
    render(){
        return(
            <div>
            <div>{this.state.number}</div>
            <button onClick={() => this.increment()}>INCREMENT</button>
            <button onClick={() => this.decrement()}>DECREMENT</button>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))