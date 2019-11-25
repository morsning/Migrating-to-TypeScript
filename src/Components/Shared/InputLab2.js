import React from 'react'

class InputLab2 extends React.Component {

    state = {
        someValue: ''
    }

    componentDidMount() {
        this.setState({someValue: this.props.currentInputValue})
    }

    handleFormSubmit(event) {
        event.preventDefault();
        this.props.onInputSubmit(this.state.someValue)
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={event => this.handleFormSubmit(event)}>
                    <input 
                        type="text" 
                        value={this.state.someValue}
                        placeholder="enter some text"
                        onChange={e => this.setState({someValue: e.target.value})}
                    />
                    <input type="submit" value="Submit" />
                </form>
                <p>Component level state:</p>
                <p>{this.state.someValue}</p>
            </React.Fragment>
        )
    }
}

export default InputLab2