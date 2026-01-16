import { FormGroup, Label, Input, FormFeedback } from "reactstrap";


export default function HamurKalinligi({value, onChange, invalid}) {
    return (
        <>
            <FormGroup>
                <Label for="dough" className="fw-medium fs-5 pt-2">
                    Hamur Seç <span className="text-danger">*</span>    
                </Label>
                <Input
                    id="dough"
                    name="dough"
                    type="select"
                    value={value}
                    data-cy="form-dough"
                    onChange={onChange}
                    invalid={invalid}
                >
                    <option value="" disabled>
                        Hamur Kalınlığı
                    </option>
                    <option value="Kalın" >
                        Kalın
                    </option>
                    <option value="İnce" >
                        İnce
                    </option>
                    <option value="Süper İnce" >
                        Süper İnce
                    </option>
                    <option value="Peynirli" >
                        Peynirli
                    </option>
                    <option value="Sarımsaklı" >
                        Sarımsaklı
                    </option>
                </Input>
                {invalid && <FormFeedback>Lütfen pizza hamurunuzu seçin</FormFeedback>}
            </FormGroup>

        </>
    );
}