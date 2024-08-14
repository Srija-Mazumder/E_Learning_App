const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#007bff' }}>
        <div className="container-sm">
          <ul className="navbar-nav" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: 'white', textDecoration: 'none' }}>Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: 'white', textDecoration: 'none' }}>Courses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: 'white', textDecoration: 'none' }}>Progress</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: 'white', textDecoration: 'none' }}>Login</a>
            </li>
            <li className="nav-item">
              <box-icon type='solid' name='user-circle' className="nav-link" color="white"></box-icon>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
  
  export default NavBar;
  