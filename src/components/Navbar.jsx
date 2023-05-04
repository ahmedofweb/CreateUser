import './Navbar.css'
function Navbar( {events} ) {
  return (
    <div className='navbar'>
        <h1>CUser</h1>
        <h2>{events.length ? `Users: ${events.length}` : `No users !`}</h2>
    </div>
  )
}

export default Navbar