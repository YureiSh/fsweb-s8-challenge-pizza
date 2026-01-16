import { FormGroup, Label, Input, FormFeedback } from "reactstrap";

export default function Isimarea({ value, onChange, invalid }) {
    return (
        <>
            <FormGroup className="pt-4">
                <Label for="isim" className="fw-medium fs-5 mb-3">
                    İsim
                </Label>
                <Input
                    id="isim"
                    name="isim"
                    placeholder="İsmin soyismin?"
                    type="text"
                    value={value}
                    onChange={onChange}
                    style={{padding:"1rem"}}
                    invalid={invalid}
                    data-cy="form-isim"
                />
                {invalid && <FormFeedback>3 harften fazla bir isim seçmeniz gerekli</FormFeedback>}
            </FormGroup>
        </>
    );
}