import React, { SyntheticEvent, FormEvent, ChangeEventHandler } from 'react'

type InputLabProps = {
    onInputSubmit: (value: string) => void
}

type InputLabState = {
    someValue: string;
}

/* In TypeScript React.Component is a generic type, we can provide it with a type for props and state*/
class InputLab extends React.Component<InputLabProps, InputLabState> {

    state = {
        someValue: ''
    }

    /* The lazy (not recommended) approach, we can use any, but we miss out on the benefits of Typescript */
    /*
    handleFormSubmit(event: any): void {
        event.preventDefault();
        this.props.onInputSubmit(this.state.someValue)
    }
    */

    /* A better approach */
    handleFormSubmit(event: SyntheticEvent) {
        event.preventDefault();
        this.props.onInputSubmit(this.state.someValue)
    }

    /* Let's add a method and re-write our render method to demonstrate onChange */
    /*
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
    */

    /* The bad/lazy approach */
    /*
    handleChange = (e: any) => {
        this.setState({someValue: e.target.value})
    }
    */

    /* The better approach */
    /* PS, if you start typing FormEve.. and press enter at the suggestion, FormEvent will be automatically imported */
    handleChange = (e: FormEvent<HTMLInputElement>): void => {
        this.setState({someValue: e.currentTarget.value})
    }
    
    /* An alternative approach (you might encounter this pattern) */
    /*
    The difference between the approach bellow and the handleChange above, is that in the above example uses an inferred
    method signature. In the example/approach/pattern bellow we enforce a type from @types/react
    */
    /*
    handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        this.setState({someValue: e.currentTarget.value})
    }
    */

    render() {
        return (
            <React.Fragment>
                <form onSubmit={event => this.handleFormSubmit(event)}>
                    <input 
                        type="text" 
                        value={this.state.someValue}
                        placeholder="enter some text"
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="Submit" />
                </form>
                <p>Component level state:</p>
                <p>{this.state.someValue}</p>
            </React.Fragment>
        )
    }
}

export default InputLab