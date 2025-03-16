import React from "react";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer_container">
          <div className="site_nav">
            <div className="email_cta_div">
              <div className="">
                <p>Stay in the loop. Join my newsletter list.</p>
                <form className="email_cta_form">
                  <input type="email" placeholder="Enter your email" />
                  <button type="submit">Subscribe</button>
                </form>
              </div>

              <div className="">
                <p>Gavin Ware - Public Speaker</p>

                <address>
                  <a href="tel:+14155550132">+1 (415) 555‑0132</a>
                  <br />
                  <a href="mailto:contact@gavinware.com">
                    contact@gavinware.com
                  </a>
                </address>
              </div>

              <div className="sitemap">
                <h3>Site Map</h3>
                <ul>
                  <li>
                    <a href="/about">Home</a>
                  </li>
                  <li>
                    <a href="/services">Events</a>
                  </li>
                  <li>
                    <a href="/contact">About</a>
                  </li>
                  <li>
                    <a href="/blog">Pricing</a>
                  </li>
                  <li>
                    <a href="/shop">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
