import { FormGroup, Label, Input, FormFeedback } from "reactstrap";

export default function BoyutSec({ value, onChange, invalid }) {
  return (
    <FormGroup data-cy="form-pizzaSize" tag="fieldset" className="mb-4 pt-2">
      <legend className="fw-medium fs-5">
        Boyut Seç <span className="text-danger">*</span>
      </legend>

      <FormGroup check className="mb-2">
        <Input
          id="size-S"
          name="pizzaSize"
          type="radio"
          value="S"
          checked={value === "S"}
          onChange={onChange}
          invalid={invalid}
        />
        <Label for="size-S" check>
          Küçük
        </Label>
      </FormGroup>

      <FormGroup check className="mb-2">
        <Input
          id="size-M"
          name="pizzaSize"
          type="radio"
          value="M"
          checked={value === "M"}
          onChange={onChange}
          invalid={invalid}
        />
        <Label for="size-M" check>
          Orta
        </Label>
      </FormGroup>

      <FormGroup check>
        <Input
          id="size-L"
          name="pizzaSize"
          type="radio"
          value="L"
          checked={value === "L"}
          onChange={onChange}
          invalid={invalid}
        />
        <Label for="size-L" check>
          Büyük
        </Label>
      </FormGroup>
      {invalid && <FormFeedback>Lütfen pizza boyutunu seçin</FormFeedback>}
    </FormGroup>
  );
}
