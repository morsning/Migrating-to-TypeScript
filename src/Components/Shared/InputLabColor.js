import React from 'react'

class InputLabColor extends React.Component {

    state = {
        someValue: '',
        dynamicStyle: {}
    }

    componentDidUpdate() {
        console.log(this.props.colors())
        //move this code so that the same changehandler-function does the setState at the same time
        //as the onChange event is fired..
    }

    handleFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <div style={this.state.dynamicStyle}>
                <form onSubmit={event => this.handleFormSubmit(event)}>
                    <input 
                        type="text" 
                        value={this.state.someValue}
                        placeholder="enter some text"
                        onChange={e => this.setState({someValue: e.target.value, dynamicStyle: this.props.colors()})}
                    />
                    <input type="submit" value="Submit" />
                </form>
                <p>Component level state:</p>
                <p>{this.state.someValue}</p>
                </div>
            </React.Fragment>
        )
    }
}

export default InputLabColor