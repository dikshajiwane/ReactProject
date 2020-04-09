import React, {Component} from 'react'

class Test extends Component {
    state = {
    title: '',
    body: ''
    }
    componentDidMount(nextProps, nextState){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then(response => response.json())
          .then(json =>
          this.setState({title: json.title, body:json.body}))
    }
    render(){
        return(
            <div>
                <h1 className="display-4">test page</h1>
                {this.state.title}
                {this.state.body}
            </div>
        )
    }
}

export default Test