var React = require('react')
var {Link} = require('react-router')

var Examples = (props) => {
  return(
    <div>
      <h1 className='text-center page-title'>Examples</h1>
      <p className='text-center'>Here are a few example locations to try out:</p>
      <ol className='text-center'>
        <li>
          <Link to='/?location=New+York'>New York, NY</Link>
        </li>
        <li>
          <Link to='/?location=Rome'>Rome, IT</Link>
        </li>
        <li>
          <Link to='/?location=California'>California, LA</Link>
        </li>
      </ol>
    </div>
  )
}

module.exports = Examples
