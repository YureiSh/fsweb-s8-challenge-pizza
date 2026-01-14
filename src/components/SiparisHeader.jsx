import { Link } from "react-router-dom"
import './SiparisForm.css'

export default function SiparisHeader() {
  return (
    <div className="siparis-header">
      <div className="siparis-header-inner">
        <img
          src="../images/iteration-1-images/logo.svg"
          className="logo-enterance"
          alt="Logo"
        />

        <div className="links">
          <Link className="tip" to="/">Anasayfa</Link> <span className="tip">- </span>
          <Link className="tip" to="/siparis">Sipariş Oluştur</Link>
        </div>
      </div>
    </div>
  );
}
