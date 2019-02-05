## Test Your Knowledge: JSX Interpolation

The App function below returns some JSX that has a hardcoded value for the current time.  Chances are that the time isn't correct.

Use the getTime function to make sure the App component shows the current time!

    function getTime() {
        return (new Date()).toLocaleTimeString()
    }

    // Creates a functional component
    const App = () => {
        return (
            <div>
                <div>Current Time:</div>
                <h3>{getTime()}</h3>
            </div>
        );
    }

    // Renders the App component into a div with id 'root'
    ReactDOM.render(<App />, document.querySelector('#root'));
