/** @jsx React.DOM */
var Decimal = React.createClass({
  getInitialState: function() {
    return { result: '' };
  },
  change: function(e) {
    var decimal = e.target.value;
    if (decimal) {
      var binary = parseInt(decimal, 2);
      this.setState({result: binary});
    } else {
      this.setState({result: ''});
    }
  },
  render: function() {
    return (
      <div>
        <input onChange={this.change} placeholder="vpisi binarno stevilo" />
        <span className="result">{this.state.result}</span>
      </div>
    );
  }
});

var Binary = React.createClass({
  getInitialState: function(){
    return { result: '' };
  },
  change: function(e) {
    var binary = e.target.value;
    if (binary) {
      var decimal = parseInt(binary, 10);
      var result = decimal.toString(2);
      this.setState({result: result});
    } else {
      this.setState({result: ''});
    }
  },
  render: function() {
    return (
      <div>
        <input onChange={this.change} placeholder="vpisi decimalno stevilo" />
        <span className="result">{this.state.result}</span>
      </div>
    );
  }
});

var Converter = React.createClass({
  render: function() {
    return (
      <div>
        <Decimal/>
        <Binary/>
      </div>
    );
  }
});

React.renderComponent(<Converter/>, document.querySelector('body'));
