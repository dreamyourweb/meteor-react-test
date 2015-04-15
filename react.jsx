var HelloButton = ReactMeteor.createClass({
    render: function() {
        return React.createElement('button', {
            onClick: this.buttonClicked
        }, "Click me React");
    },

    buttonClicked: function() {
        console.log("React clicked!");
        Session.set('counter', Session.get('counter') + 1);
        this.props.onButtonClick();
    }
});

var HelloText = ReactMeteor.createClass({
    render: function() {
        return (
            <div className="helloText">
                Button clicked {this.props.meteorCounter} times <br/>
                React Button clicked {this.props.internalCounter} times
            </div>
        );
    }
});

var Hello = ReactMeteor.createClass({
    templateName: "HelloReact",
    getInitialState: function() {
        return {internalCounter: 0};
    },
    render: function() {
        return (
            <div className="reactHello">
                <HelloButton onButtonClick={this.increaseCounter}/>
                <HelloText
                  internalCounter={this.state.internalCounter}
                  meteorCounter={this.state.counter}
                />
            </div>
        );
    },

    increaseCounter: function() {
        this.setState({internalCounter: this.state.internalCounter + 1});
    },

    getMeteorState: function() {
        return {
            counter: Session.get("counter")
        };
    }
});
