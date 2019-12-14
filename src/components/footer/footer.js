import React, { Component } from "react"
import "./footer.module.scss"
import logoPhpStorm from "../../images/footer-logo-phpstorm.png";
import logoDataGrip from "../../images/footer-logo-datagrip.png";

class Footer extends Component {
  render() {
    return (
      <footer>

        <div className="footer-column">
          <h4 className="footer-title">Newsletter</h4>
          <p>Subscribe to the plugin newsletter to always stay up to date. No spam, that's a promise.</p>
          <form>
            <input type="text" placeholder="Email (required)"/>
            <input type="text" placeholder="First name"/>
            <input type="text" placeholder="Last name"/>
            <input type="submit" value="Subscribe"/>
          </form>
        </div>

        <div className="footer-column">
          <h4 className="footer-title">Social Media</h4>
          <a className="footer-link" href="https://github.com/drazenbebic" target="_blank" rel="noopener noreferrer">GitHub</a>
          <br/>
          <a className="footer-link" href="https://www.linkedin.com/in/drazenbebic/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <br/>
          <a className="footer-link" href="https://www.xing.com/profile/Drazen_Bebic/" target="_blank" rel="noopener noreferrer">Xing</a>
          <br/>
          <a className="footer-link" href="https://profiles.wordpress.org/drazenbebic/" target="_blank" rel="noopener noreferrer">WordPress.org</a>
        </div>

        <div className="footer-column">
          <h4 className="footer-title">Built with</h4>
          <a className="footer-jetbrains-link" href="https://www.jetbrains.com/?from=license-manager-for-woocommerce" target="_blank" rel="noopener noreferrer">
            <img src={ logoPhpStorm } alt="PhpStorm"/>
          </a>
          <a className="footer-jetbrains-link" href="https://www.jetbrains.com/?from=license-manager-for-woocommerce" target="_blank" rel="noopener noreferrer">
            <img src={ logoDataGrip } alt="DataGrip"/>
          </a>
        </div>

      </footer>
    )
  }
}

export default Footer