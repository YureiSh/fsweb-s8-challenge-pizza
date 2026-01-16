import "./HomePage.css";

export default function Footer() {
  return (
    <footer>
      <section className="footer-section">
        <div className="iletisim">
          <img
            src="../images/iteration-2-images/footer/logo-footer.svg"
            alt="Teknoloji Yemekler"
          />

          <ul>
            <li>
              <img
                src="../images/iteration-2-images/footer/icons/icon-1.png"
                alt="Adres"
              />
              <address>
                341 Londonderry Road, <br /> Istanbul Türkiye
              </address>
            </li>

            <li>
              <img
                src="../images/iteration-2-images/footer/icons/icon-2.png"
                alt="E-posta"
              />
              <p>aciktim@teknolojiyemekler.com</p>
            </li>

            <li>
              <img
                src="../images/iteration-2-images/footer/icons/icon-3.png"
                alt="Telefon"
              />
              <p>+90 216 123 45 67</p>
            </li>
          </ul>
        </div>

        <div className="hot-menu">
          <h3>Hot Menu</h3>
          <div className="menu-list">
            <p>Terminal Pizza</p>
            <p>5 Kişilik Hackathlon Pizza</p>
            <p>useEffect Tavuklu Pizza</p>
            <p>Beyaz Console Frosty</p>
            <p>Testler Geçti Mutlu Burger</p>
            <p>Position Absolute Acı Burger</p>
          </div>
        </div>

        <div className="instagram">
          <h3>Instagram</h3>
          <div className="instagram-photos">
            <img src="../images/iteration-2-images/footer/insta/li-0.png" alt="Insta 0" />
            <img src="../images/iteration-2-images/footer/insta/li-1.png" alt="Insta 1" />
            <img src="../images/iteration-2-images/footer/insta/li-2.png" alt="Insta 2" />
            <img src="../images/iteration-2-images/footer/insta/li-3.png" alt="Insta 3" />
            <img src="../images/iteration-2-images/footer/insta/li-4.png" alt="Insta 4" />
            <img src="../images/iteration-2-images/footer/insta/li-5.png" alt="Insta 5" />
          </div>
        </div>
      </section>

      <hr className="footer-hr" />

      <section className="trademark">
        <p>&copy; 2013 Teknoloji Yemekler</p>
        <i className="fa fa-twitter" aria-hidden="true"></i>
      </section>
    </footer>
  );
}
