import React from 'react'
import { Controller, Control, FieldValues, Path } from 'react-hook-form';
import { cn } from '@/utils/helpers';

export type Option = {
  label: string;
  value: string;
};

type CheckboxGroupProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  options: Option[];
  className?: string;
};


export const CheckboxGroup = <T extends FieldValues> ({
  control,
  name,
  options,
  className
}: CheckboxGroupProps<T>) => {
  return (
    <Controller
     control={control}
     name={name}
     render={({ field }) => {
      const values: string[] = field.value || [];

        const toggle = (val: string) => {
          if (values.includes(val)) {
            field.onChange(values.filter((v) => v !== val));
          } else {
            field.onChange([...values, val]);
          }
        };
      return (
        <div className={cn('flex flex-col gap-2', className)}>
            {options.map((opt) => (
              <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={values.includes(opt.value)}
                  onChange={() => toggle(opt.value)}
                  className="h-6 w-6 rounded border border-black/60 bg-white appearance-none checked:bg-blue-500 checked:border-blue-500
                  checked:before:content-['✔'] checked:before:text-white checked:before:flex checked:before:items-center checked:before:justify-center"
                />
                <span className="text-sm">{opt.label}</span>
              </label>
            ))}
          </div>
      )
     }}
    />
  )
}