var React = require('react');

// ES6 Stateless Component

const GlobalHeader = (props) => {

  //Render Each Link
  const headerMenu = props.data.map(function(element, index) {
    return (
      <li><a href={element.link} key={index}>{element.text}</a></li>
    );
  });

  return (
    <div className="header">
      <div className="container clearfix">
        <h2 className="header--logo"><a href="./">Easyjet</a></h2>
        <div className="header--menu"><ul className="menuUl">{headerMenu}</ul></div>
      </div>
    </div>
  );
};

module.exports = GlobalHeader;