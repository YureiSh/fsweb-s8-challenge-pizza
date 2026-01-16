import SiparisBody from './SiparisBody';
import './SiparisForm.css'
import SiparisHeader from './SiparisHeader';

export default function SiparisForm({form, setForm}){
    return(
    <>
    <SiparisHeader/>
    <SiparisBody form={form} setForm={setForm} />
    </>
    );
}