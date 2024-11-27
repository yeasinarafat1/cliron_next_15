import React from "react";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Control } from "react-hook-form";
import { Input } from "../ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
interface props {
  control: Control<any>;
  label: string;
  type?: "text" | "number" | "password" | "phoneNumber" | "select" | "email";
  name: string;
  placeholder: string;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}
const CustomFormFeield = ({
  control,
  label,
  type = "text",
  name,
  placeholder,
  className,
  children,
  disabled,
}: props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="text-gray-900 font-medium">{label}</FormLabel>
          <FormControl>
            <RenderFormFeield
              field={field}
              placeholder={placeholder}
              className={className}
              type={type}
              children={children}
              disabled={disabled}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomFormFeield;
const RenderFormFeield = ({
  field,
  type,
  placeholder,
  className,
  children,
  disabled,
}: {
  field: any;
  type?: "text" | "number" | "password" | "phoneNumber" | "select" | "email";

  placeholder: string;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}) => {
  switch (type) {
    case "text":
      return (
        <Input
          type={type}
          placeholder={placeholder}
          {...field}
          className={`h-11 ${className} text-base`}
        />
      );
    case "email":
      return (
        <Input
          type={type}
          placeholder={placeholder}
          {...field}
          className={`h-11 ${className} text-base`}
          disabled={disabled}
        />
      );
    case "number":
      return (
        <Input
          type={type}
          placeholder={placeholder}
          {...field}
          className={`h-11 ${className}`}
        />
      );

    case "phoneNumber":
      return (
        <PhoneInput
          placeholder={placeholder}
          value={field.value}
          onChange={field.onChange}
          defaultCountry="BD"
          international
          withCountryCallingCode
          className="w-full h-11 border border-gray-100 rounded-md"
        />
      );
    case "select":
      return (
        <FormControl>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="shad-select-trigger">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="shad-select-content">
              {children}
            </SelectContent>
          </Select>
        </FormControl>
      );
    case "password":
      return (
        <Input
          type={type}
          placeholder={placeholder}
          {...field}
          className={`h-11 ${className}`}
        />
      );

    default:
      break;
  }
};
