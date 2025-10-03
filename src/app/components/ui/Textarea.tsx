'use client'
import * as React from "react"
import { cn } from "@/utils/helpers"
import { UseFormRegisterReturn } from "react-hook-form"

interface TextareaProps extends React.ComponentProps<"textarea"> {
  register?: UseFormRegisterReturn
}

function Textarea({ className, register, ...props }: TextareaProps) {
  return (
    <textarea
      data-slot="input"
      {...register}
      className={cn(
        "input input-bordered border-black/60 w-full",
        "bg-[#fdf9e6] text-black",
        "focus:outline-none focus:ring-2 focus:ring-black/60",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
      rows={3}
    />
  )
}

export {Textarea}