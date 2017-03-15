var React = require('react')

var Nav = require('Nav')
var Footer = require('Footer')

var Main = (props) => {
  return(
    <div>
      <Nav/>
      <div className="row">
        <div className='columns medium-6 large-8 small-centered'>
          {props.children}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

module.exports = Main
