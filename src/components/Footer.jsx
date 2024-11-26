

const Footer = () => {
    return(
        <>
        <footer className="footer">
    <div className="container">
      <div className="footer-section">
        <h3>Our Office</h3>
        <p><i className="fas fa-map-marker-alt"></i> 123 Street, New York, USA</p>
        <p><i className="fas fa-phone-alt"></i> +012 345 67890</p>
        <p><i className="fas fa-envelope"></i> info@example.com</p>
        <div class="social-icons">
          <a href="#"><i className="fab fa-twitter"><img src="src/assets/facebook.png"/></i></a>
          <a href="#"><i className="fab fa-facebook"><img src="src/assets/facebook.png"/></i></a>
          <a href="#"><i className="fab fa-youtube"><img src="src/assets/facebook.png"/><img src="src/assets/facebook.png"/></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>

      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Our Services</a></li>
          <li><a href="#">Terms & Condition</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Business Hours</h3>
        <p>Monday - Friday: <br/><span>09:00 am - 07:00 pm</span></p>
        <p>Saturday: <br/><span>09:00 am - 12:00 pm</span></p>
        <p>Sunday: <span>Closed</span></p>
      </div>
      <div className="footer-section">
        <h3>Newsletter</h3>
        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Your email"/>
          <button type="submit">SignUp</button>
        </form>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© Your Site Name, All Right Reserved. Designed by <a href="#">HTML Codex</a>. Distributed By <a href="#">ThemeWagon</a></p>
    </div>
  </footer>
  </>
    );
}

export default Footer;