import './SiparisForm.css'
import { useState, useEffect } from "react"
import { Form, Button, FormFeedback } from "reactstrap"
import { useHistory } from 'react-router-dom';
import axios from "axios"

import BoyutSec from './form-components/BoyutSec';
import HamurKalinligi from './form-components/HamurKalinligi';
import EkstraMalzeme from './form-components/EkstraMalzeme';
import SiparisNotu from './form-components/SiparisNotu';
import SiparisCount from './form-components/SiparisCount';
import Summary from './form-components/Summary';
import Isimarea from './form-components/Isimarea';

export default function SiparisBody({ form, setForm }) {

    const history = useHistory();
    const [isValid, setIsValid] = useState(false);
    const [errors, setErrors] = useState({
        isim: false,
        pizzaSize: false,
        dough: false,
        extras: false
    });

    useEffect(() => {
        if (form.isim.trim().length >= 3 &&
            form.extras.length >= 4 && form.pizzaSize !== "" && form.dough !== "") {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [form])

    const handleChange = (event) => {
        const { name, value, checked } = event.target;

        if (name === "extras") {
            setForm((prev) => {
                const nextExtras = checked
                    ? [...prev.extras, value]
                    : prev.extras.filter((x) => x !== value);

                setErrors((prevErr) => ({
                    ...prevErr,
                    extras: nextExtras.length < 4,
                }));

                return { ...prev, extras: nextExtras };
            });

            return;
        }
        setForm({ ...form, [name]: value });

        if (name === 'isim') {
            if (value.trim().length >= 3) {
                setErrors({ ...errors, [name]: false });
            } else {
                setErrors({ ...errors, [name]: true });
            }
        }

        if (name === "pizzaSize" || name === "dough") {
            if (value !== "") {
                setErrors({ ...errors, [name]: false });
            } else {
                setErrors({ ...errors, [name]: true });
            }
        }

    };

    function handleCounter(event) {
        const { id } = event.target;

        setForm((prev) => {
            if (id === "plus") {
                return { ...prev, count: prev.count + 1 };
            }

            return { ...prev, count: Math.max(1, prev.count - 1) };
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!isValid) return;
        console.log(event);
        axios
            .post(
                "https://reqres.in/api/pizza",
                form,
                {
                    headers: {
                        "x-api-key": "reqres-free-v1",
                    },
                }
            )
            .then(function (response) {
                console.log(response);
                history.push('/siparis-alindi');
            })
            .catch(function (error) {
                console.log(error);
                console.alert("Şu an siparişinizi ulaştıramıyoruz lütfen daha sonra tekrar deneyin!");
            });

    }

    return (
        <>
            <div className='siparis-header-inner ps-4'>
                <img id='form-banner' src="../images/iteration-2-images/pictures/form-banner.png" alt="" />
                <div>
                    <h2 className="pt-5 pb-3 fs-4">Position Absolute Acı Pizza</h2>
                    <div className='d-flex justify-content-between'>
                        <h1 className='fw-bold fs-2 w-75' >85.50<span className='fw-semibold'>₺</span></h1>
                        <div className='d-flex justify-content-around w-25'>
                            <p>4.9</p>
                            <p>(200)</p>
                        </div>
                    </div>
                    <p className='pt-2'>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>
                </div>
                <Form onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='col-3'>
                            <BoyutSec value={form.pizzaSize} onChange={handleChange}
                                invalid={errors.pizzaSize} />

                        </div>
                        <div className='col-3'></div>
                        <div className='col-5'>
                            <HamurKalinligi value={form.dough} onChange={handleChange}
                                invalid={errors.dough} />

                        </div>
                        <div className='col-12'>
                            <EkstraMalzeme value={form.extras} onChange={handleChange}
                                invalid={errors.extras} />

                        </div>
                        <div className='col-12'>
                            <Isimarea value={form.isim} onChange={handleChange}
                                invalid={errors.isim} />

                        </div>
                        <div className='col-12'>
                            <SiparisNotu value={form.note} onChange={handleChange} />
                        </div>
                        <hr className='mt-4 mb-4'></hr>

                        <div className='checkout'>
                            <div className="counterArea">
                                <SiparisCount value={form.count} onClick={handleCounter} />
                                <Button
                                    className="btn btn-warning"
                                    disabled={!isValid}
                                >SİPARİŞ VER</Button>
                            </div>
                            <div className="summaryArea">
                                <Summary data={form} />
                            </div>
                        </div>
                    </div>
                </Form>
            </div>

        </>
    );
}
