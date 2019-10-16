import Nav from './Nav'

const Header = () => {
  return (
    <div>
      <div className="bar">
        <a>Niiice Store</a>
        <Nav />
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <div>
        <p>Cart</p>
      </div>
    </div>
  )
}

export default Header
