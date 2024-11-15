import { UseFormReturn } from "react-hook-form";
import { Input } from "../input";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";

interface Props {
  form: UseFormReturn<any>;
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  description?: string;
  disabled?: boolean;
  className?: string;
}

export function FormInput({
  form,
  name,
  label,
  placeholder = "",
  description,
  type = "text",
  disabled = false,
  className,
}: Props) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              disabled={disabled}
              {...field}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
