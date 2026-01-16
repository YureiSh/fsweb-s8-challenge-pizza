import "./HomePage.css";

export default function HomePageBody() {
  return (
    <>
      <header>
        <nav className="item-list">
          <a href="#Kore">
            <img src="../images/iteration-2-images/icons/1.svg" alt="Kore" />
            <span>Kore</span>
          </a>

          <a href="#Pizza">
            <img src="../images/iteration-2-images/icons/2.svg" alt="Pizza" />
            <span>Pizza</span>
          </a>

          <a href="#Burger">
            <img src="../images/iteration-2-images/icons/3.svg" alt="Burger" />
            <span>Burger</span>
          </a>

          <a href="#Kizartmalar">
            <img src="../images/iteration-2-images/icons/4.svg" alt="Kızartmalar" />
            <span>Kızartmalar</span>
          </a>

          <a href="#Fastfood">
            <img src="../images/iteration-2-images/icons/5.svg" alt="Fast food" />
            <span>Fast food</span>
          </a>

          <a href="#Gazliicecekler">
            <img src="../images/iteration-2-images/icons/6.svg" alt="Gazlı içecekler" />
            <span>Gazlı içecekler</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="card-select">
          <div className="major-card">
            <h1>
              Özel <br /> Lezzetus
            </h1>
            <p>Position: Absolute Acı Burger</p>
            <a href="#siparisver" className="btn-secondary">
              SİPARİŞ VER
            </a>
          </div>

          <div className="minor-card-display">
            <div className="minor-card-1">
              <h1>
                Hackathlon <br /> Burger Menü
              </h1>
              <a href="#siparisver" className="btn-secondary">
                SİPARİŞ VER
              </a>
            </div>

            <div className="minor-card-2">
              <h1>
                <span style={{ color: "red" }}>Çoooook</span> hızlı <br /> npm gibi
                kurye
              </h1>
              <a href="#siparisver" className="btn-secondary">
                SİPARİŞ VER
              </a>
            </div>
          </div>
        </section>

        <section className="order-selection">
          <div className="order-header-text">
            <p className="addition-red-text">en çok paketlenen menüler</p>
            <p className="big-primary-text">
              Acıktıran Kodlara Doyuran Lezzetler
            </p>
          </div>

          <nav className="item-list-pill">
            <a href="#Ramen">
              <img src="../images/iteration-2-images/icons/1.svg" alt="Ramen" />
              <span>Ramen</span>
            </a>

            <a href="#Pizza">
              <img src="../images/iteration-2-images/icons/2.svg" alt="Pizza" />
              <span>Pizza</span>
            </a>

            <a href="#Burger">
              <img src="../images/iteration-2-images/icons/3.svg" alt="Burger" />
              <span>Burger</span>
            </a>

            <a href="#FrenchFries">
              <img src="../images/iteration-2-images/icons/4.svg" alt="French Fries" />
              <span>French Fries</span>
            </a>

            <a href="#Fastfood">
              <img src="../images/iteration-2-images/icons/5.svg" alt="Fast food" />
              <span>Fast food</span>
            </a>

            <a href="#Softdrinks">
              <img src="../images/iteration-2-images/icons/6.svg" alt="Soft Drinks" />
              <span>Soft Drinks</span>
            </a>
          </nav>

          <div className="order-cards">
            <div className="order-card">
              <img
                src="../images/iteration-2-images/pictures/food-1.png"
                alt="Terminal Pizza"
              />
              <h3>Terminal Pizza</h3>

              <div className="order-info">
                <div className="comment-rate">
                  <p>4.9</p>
                  <p>(200)</p>
                </div>
                <span style={{ fontWeight: "bold" }}>60£</span>
              </div>
            </div>

            <div className="order-card">
              <img
                src="../images/iteration-2-images/pictures/food-2.png"
                alt="Position Absolute Acı Pizza"
              />
              <h3>Position Absolute Acı Pizza</h3>

              <div className="order-info">
                <div className="comment-rate">
                  <p>4.9</p>
                  <p>(200)</p>
                </div>
                <span style={{ fontWeight: "bold" }}>60£</span>
              </div>
            </div>

            <div className="order-card">
              <img
                src="../images/iteration-2-images/pictures/food-3.png"
                alt="useEffect Tavuklu Burger"
              />
              <h3>useEffect Tavuklu Burger</h3>

              <div className="order-info">
                <div className="comment-rate">
                  <p>4.9</p>
                  <p>(200)</p>
                </div>
                <span style={{ fontWeight: "bold" }}>60£</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
