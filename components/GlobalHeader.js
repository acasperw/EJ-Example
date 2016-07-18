var React = require('react');

function GlobalHeader(props) {
  return (
    <div className="header">
      <div className="container">
        <h2 className="header--logo"><a href="./">Easyjet</a></h2>
      </div>
  </div>
  );
}

module.exports = GlobalHeader;