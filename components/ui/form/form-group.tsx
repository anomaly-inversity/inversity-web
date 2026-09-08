import React, { HTMLAttributes } from "react";
import { Field, FieldError, FieldGroup, FieldLabel } from "../field";
import {
  Control,
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  Path,
  UseFormStateReturn,
} from "react-hook-form";

export interface FormGroupProps<
  TFieldValues extends FieldValues,
  TFieldName extends Path<TFieldValues>,
> extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  required?: boolean;
  control: Control<TFieldValues, any, TFieldValues> | undefined;
  name: TFieldName;
  render: ({
    field,
    fieldState,
    formState,
  }: {
    field: ControllerRenderProps<TFieldValues, TFieldName>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<TFieldValues>;
  }) => React.ReactElement;
}

export function FormGroup<
  TFieldValues extends FieldValues,
  TFieldName extends Path<TFieldValues>,
>({
  label,
  required,
  name,
  control,
  render,
}: FormGroupProps<TFieldValues, TFieldName>) {
  return (
    <div>
      <FieldGroup>
        <Controller
          name={name}
          control={control}
          render={({ field, fieldState, formState }) => (
            <Field data-invalid={fieldState.invalid}>
              {label && (
                <FieldLabel
                  htmlFor={field.name}
                  className={[
                    required
                      ? "after:content-['*'] after:text-destructive after:-ml-1"
                      : "",
                  ].join(" ")}
                >
                  {label}
                </FieldLabel>
              )}
              {render({ field: field, fieldState, formState })}
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
    </div>
  );
}
