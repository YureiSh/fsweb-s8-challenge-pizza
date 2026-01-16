import { FormGroup, Label, Input } from "reactstrap";

export default function SiparisNotu({ value, onChange }) {
    return (
        <>
            <FormGroup className="pt-2">
                <Label for="note" className="fw-medium fs-5 mb-3">
                    Sipariş Notu
                </Label>
                <Input
                    id="note"
                    name="note"
                    placeholder="Siparişine eklemek istediğin bir not var mı?"
                    type="textarea"
                    value={value}
                    onChange={onChange}
                    style={{padding:"1rem"}}
                />
            </FormGroup>
        </>
    );
}