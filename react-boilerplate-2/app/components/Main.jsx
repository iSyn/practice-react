var React = require('react')

var Nav = require('Nav')
var Footer = require('Footer')

var Main = (props) => {
  return(
    <div>
      <div>
        <div>
          <p>Main.jsx Rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  )
}

module.exports = Main
