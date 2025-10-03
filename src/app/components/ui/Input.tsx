'use client'
import * as React from "react"
import { cn } from "@/utils/helpers"
import { UseFormRegisterReturn } from "react-hook-form"

interface InputProps extends React.ComponentProps<"input"> {
  register?: UseFormRegisterReturn
}

function Input({ className, type, register, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "input input-bordered border-black/60 w-full",
        "bg-[#fdf9e6] text-black",
        "focus:outline-none focus:ring-2 focus:ring-black/60",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...register}
      {...props}
    />
  )
}

export {Input}