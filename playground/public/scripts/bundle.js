'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.handleIncrement = _this.handleIncrement.bind(_this);
    _this.handleDecrement = _this.handleDecrement.bind(_this);
    _this.handleReset = _this.handleReset.bind(_this);

    _this.state = {
      counter: 0
    };
    return _this;
  }

  _createClass(Counter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var counter = localStorage.getItem('counter');
      try {
        counter = parseInt(counter, 10);
        if (!isNaN(counter)) {
          this.setState(function () {
            return { counter: counter };
          });
        }
      } catch (err) {
        //Do Nothing
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.counter !== this.state.counter) {
        console.log('Backup Done!');
        localStorage.setItem('counter', this.state.counter);
      }
    }
  }, {
    key: 'handleIncrement',
    value: function handleIncrement() {
      this.setState(function (prevState) {
        return { counter: prevState.counter + 1 };
      });
    }
  }, {
    key: 'handleDecrement',
    value: function handleDecrement() {
      this.setState(function (prevState) {
        return { counter: prevState.counter - 1 };
      });
    }
  }, {
    key: 'handleReset',
    value: function handleReset() {
      this.setState(function () {
        return { counter: 0 };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Count: ',
          this.state.counter
        ),
        React.createElement(
          'button',
          { onClick: this.handleIncrement },
          '+1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleReset },
          'Reset'
        ),
        React.createElement(
          'button',
          { onClick: this.handleDecrement },
          ' -1'
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('root'));
