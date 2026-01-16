
export default function SiparisCount({ value, onClick }) {
  return (
    <>
        <div className="d-flex ">
            <div id="minus" className="siparis-count-btn" onClick={onClick} >-</div>
            <div style={{backgroundColor:"white", cursor: "default"}} className="siparis-count-btn" >{value}</div>
            <div id="plus" className="siparis-count-btn" onClick={onClick} >+</div>
        </div>
    </>
  );
}
