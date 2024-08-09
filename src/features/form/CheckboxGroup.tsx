import { Control, Controller } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

interface CheckboxGroupFieldProps {
  control: Control;
  name: string;
  label?: string;
  options: { value: string; label: string }[];
}

const CheckboxGroupField = ({
  control,
  name,
  label,
  options,
}: CheckboxGroupFieldProps) => (
  <FormControl component="fieldset" sx={{ mt: 2 }}>
    <FormLabel component="legend">{label}</FormLabel>
    <FormGroup>
      {options.map((option) => (
        <Controller
          key={option.value}
          name={`${name}.${option.value}`}
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={
                <Checkbox
                  {...field}
                  checked={field.value || false}
                  onChange={(e) => field.onChange(e.target.checked)}
                />
              }
              label={option.label}
            />
          )}
        />
      ))}
    </FormGroup>
  </FormControl>
);
export default CheckboxGroupField;
