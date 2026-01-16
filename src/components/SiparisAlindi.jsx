import './HomePage.css'

export default function SiparisAlindi({ form }) {
    return (
        <>

            <div className="enterance-header" style={{ backgroundImage: "none", backgroundColor: "red" }}>
                <div className='mb-4'>
                    <img
                        src="../images/iteration-1-images/logo.svg"
                        className="logo-enterance"
                        alt="Logo"
                    />
                </div>

                <div className="enterance pt-4 text-light">
                    <p className="addition-yellow-text">lezzetin yolda</p>
                    <p className="big-white-text"> SİPARİŞ ALINDI</p>

                    <div className="siparis-line" />
                    <h2 className='mt-5 mb-5'>Position Absolute Acı Pizza</h2>

                    <div className='text-start'>
                        <div className=' mt-5 d-flex'>
                            <p>Boyut: </p>
                            <p className='fw-bold'>{form.pizzaSize}</p>
                        </div>

                        <div className='d-flex'>
                            <p>Hamur: </p>
                            <p className='fw-bold'>{form.dough}</p>
                        </div>

                        <div className="d-flex mb-5">
                            <p className="me-2 mb-0">Ek Malzemeler:</p>
                            <p className="fw-bold mb-0">{form.extras.join(", ")}</p>
                        </div>

                    </div>

                    <div className='summary-alindi mt-5' >
                        <h4 className='fs-5 pb-2'>Sipariş Toplamı</h4>
                        <div className='d-flex justify-content-between fw-medium '>
                            <p>Seçimler</p>
                            <p>{form.extras.length * 5}₺</p>
                        </div>
                        <div className='d-flex justify-content-between fw-medium '>
                            <p >Toplam</p>
                            <p>{form.extras.length * 5 + 80.50}₺</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}