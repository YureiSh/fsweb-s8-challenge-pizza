import '../SiparisForm.css'

export default function Summary({data}){
    return(
    <>
        <div className="summary" >
            <h4 className='fs-5 pb-2'>Sipariş Toplamı</h4>
            <div className='d-flex justify-content-between fw-medium text-secondary'>
                <p>Seçimler</p>
                <p>25.00₺</p>
            </div>
            <div className='d-flex justify-content-between fw-medium text-danger'>
                <p >Toplam</p>
                <p>110.50₺</p>
            </div>
        </div>
    </>
    );
}