function Footer () {
    return <footer className="page-footer">
    
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getUTCFullYear()}
      <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
      </div>
    </div>
  </footer>
}

export {Footer}