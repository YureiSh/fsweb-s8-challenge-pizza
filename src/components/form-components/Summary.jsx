import '../SiparisForm.css'

export default function Summary({data}){
    return(
    <>
        <div className="summary" >
            <h4 className='fs-5 pb-2'>Sipariş Toplamı</h4>
            <div className='d-flex justify-content-between fw-medium text-secondary'>
                <p>Seçimler</p>
                <p> {data.extras.length * 5 * data.count} ₺</p>
            </div>
            <div className='d-flex justify-content-between fw-medium text-danger'>
                <p >Toplam</p>
                <p> {data.extras.length * 5 + 80 * data.count} ₺</p>
            </div>
        </div>
    </>
    );
}