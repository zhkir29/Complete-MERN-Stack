import { Link } from '@reach/router';
import classes from './Layout.module.css';
const Layout = (props) =>{
  const path = window.location.pathname;
    return (<div className={classes.app}>
    <nav className={classes.nav}>
      <div className={classes.brand}>
        <h3> Brand Name</h3>
      </div>
      <div className={classes.menu}>
        <ul>
          <li>
            <Link exact='true' to="/" className={path === '/'?classes.navItemActive : classes.navItem}>Home</Link>
          </li>
          <li>
            <Link exact='true' to="/about" className={path === '/about'?classes.navItemActive : classes.navItem}>About</Link>
          </li>
          <li>
            <Link exact='true' to="/help" className={path === '/help'?classes.navItemActive : classes.navItem}>Help</Link>
          </li>
          <li>
            <Link exact='true' to="/clock" className={path === '/clock'?classes.navItemActive : classes.navItem}>Clock</Link>
          </li>
          <li>
            <Link exact='true' to="/task" className={path === '/task'?classes.navItemActive : classes.navItem}>Tasks</Link>
          </li>
        </ul>
      </div>
    </nav>
    <main className={classes.main}>
      <p>
      {props.children}
      </p>
    </main>
    <footer className={classes.footer}>
    <div>
        <h3> Footer</h3>
      </div>
      <div>
        <ul>
          <li>Link One</li>
          <li>Link Two</li>
          <li>Link Three</li>
        </ul>
      </div>
    </footer>
    </div>)
}

export default Layout;