var React = require('react');
var classNames = require('classnames');

// ES6 (statefull) Component
class GlobalHeader extends React.Component {

  constructor() {
    super();
    this._handleClick = this._handleClick.bind(this);
    this.state = {
      expanded: false
    };
  }
  
  _handleClick() {
    const obj = this;
    obj.state.expanded === true ? (
      obj.setState({expanded: false})
    ) : (
      obj.setState({expanded: true})
    );
  }
  
  render() {

    //Render Each Link
    const headerMenu = this.props.data.map(function(element, index) {
      return (
        <li><a href={element.link} key={index}>{element.text}</a></li>
      );
    });

    const classes = classNames(
      'header',
      {'expanded': this.state.expanded}
    );

    return (
      <div className={classes}>
        <div className="container clearfix">
          <h2 className="header--logo"><a href="./">Easyjet</a></h2>

          <button id="trigger" className="menu-trigger" onClick={this._handleClick}>Open/Close Menu</button>
          <div className="header--menu"><ul className="menuUl">{headerMenu}</ul></div>
        </div>
      </div>
    );
  };

};

module.exports = GlobalHeader;