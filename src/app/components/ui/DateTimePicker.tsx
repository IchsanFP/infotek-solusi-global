'use client'
import React from 'react'
import { Controller, Control, FieldValues, Path } from 'react-hook-form'
import DatePicker, {DatePickerProps} from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import { cn } from '@/utils/helpers';

type DateTimePickerPropsType<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  placeholder?: string
  className?: string
  dateTimePickerProps?: Partial<Omit<DatePickerProps, 'selected' | 'onChange'>>
}

export const DateTimePicker = <T extends FieldValues>({
  control,
  name,
  placeholder = 'Select date & time',
  className,
  dateTimePickerProps
}: DateTimePickerPropsType<T>) => {
  return (
    <Controller
     control={control}
     name={name}
     render={({ field }) => (
      <DatePicker
       placeholderText={placeholder}
       selected={field.value ? new Date(field.value) : null}
       onChange={(date: any) => {
         // Normalisasi: ambil single date aja
         if (Array.isArray(date)) {
           field.onChange(date[0] ?? null)
         } else {
           field.onChange(date ?? null)
         }
       }}
       onBlur={field.onBlur}
       minDate={new Date()}
       showTimeSelect
       dateFormat="dd/MM/yyyy HH:mm"
       className={cn(
          "input input-bordered border-black/60 w-full",
          "bg-[#fdf9e6] text-black",
          "focus:outline-none focus:ring-2 focus:ring-black/60",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          className
        )}
        {...dateTimePickerProps as DatePickerProps}
      />
     )}
    />
  )
}