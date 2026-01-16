import { FormGroup, Label, Input, FormFeedback } from "reactstrap";

const EXTRAS = [
    { value: "Pepperoni", label: "Pepperoni" },
    { value: "Sosis", label: "Sosis" },
    { value: "Kanada Jambonu", label: "Kanada Jambonu" },
    { value: "Tavuk Izgara", label: "Tavuk Izgara" },
    { value: "Soğan", label: "Soğan" },

    { value: "Domates", label: "Domates" },
    { value: "Mısır", label: "Mısır" },
    { value: "Sucuk", label: "Sucuk" },
    { value: "Jalepeno", label: "Jalepeno" },
    { value: "Sarımsak", label: "Sarımsak" },

    { value: "Biber", label: "Biber" },
    { value: "Mantar", label: "Mantar" },
    { value: "Ananas", label: "Ananas" },
    { value: "Kabak", label: "Kabak" },
];

export default function EkstraMalzeme({ value = [], onChange, invalid }) {

    return (
        <>
            <FormGroup tag="fieldset" className="mb-4 pt-2">
                <legend className="fw-medium fs-5">
                    Ek Malzemeler <span className="text-danger">*</span>
                    <p className="fw-light pt-2" style={{ fontSize: "1rem" }}>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
                </legend>

                <div data-cy="form-extras" className="d-flex flex-wrap pt-4" style={{ columnGap: "2rem", rowGap: "0.75rem" }}>
                    {EXTRAS.map((item) => (
                        <FormGroup key={item.value} className="m-0 extra-item">
                            <Input
                                id={`extra-${item.value}`}
                                name="extras"
                                type="checkbox"
                                value={item.value}
                                checked={value.includes(item.value)}
                                onChange={onChange}
                                disabled={value.length >= 10 && !value.includes(item.value)}
                                className="extra-checkbox"
                            />

                            <Label for={`extra-${item.value}`} className="extra-label fw-semibold">
                                {item.label}
                            </Label>
                        </FormGroup>
                    ))}
                </div>
                {invalid && (
                    <div className="text-danger mt-2">
                        Lütfen en az 4 pizza malzemesi seçiniz
                    </div>
                )}
            </FormGroup>
        </>
    );
}