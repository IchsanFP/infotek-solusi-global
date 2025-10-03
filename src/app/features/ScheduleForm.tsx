import React, {useState} from 'react'
import Modal from '../components/Modal'
import { AiFillProduct } from "react-icons/ai";
import { useForm } from 'react-hook-form';
import { formSchema, FormValues } from '../components/ui/formSchema';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { DateTimePicker } from '../components/ui/DateTimePicker';
import { CheckboxGroup, Option } from '../components/ui/CheckboxGroup';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormField } from '../components/ui/FormField';
import { FaArrowRight } from 'react-icons/fa';
import { IoMdRefresh } from "react-icons/io";
import { toast } from 'react-toastify';
import dayjs from 'dayjs'

const ProductOptions:Option[] = [
  {label: 'Intextive', value: 'Intextive'},
  {label: 'Cell Centinel', value: 'Cell Centinel'},
  {label: 'SignaLens', value: 'SignaLens'},
  {label: 'HelioPulse', value: 'HelioPulse'}
]

interface ScheduleFormPropsType {
  open: boolean
  onClose: () => void
}

function ScheduleForm({open, onClose}: ScheduleFormPropsType) {
  const [loading, setLoading] = useState<boolean>(false)
  const { register, handleSubmit, control, reset, formState: {errors} } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      enquiry: '',
      schedule: new Date(),
      interest: []
    }
  })

  const onSubmit = async (data: FormValues) => {
    try {
      setLoading(true)
      const payload = {
      name: data.name,
      email: data.email,
      product: data.interest?.join(', '),
      schedule: dayjs(data.schedule).format("DD/MM/YYYY HH:mm"),
      enquiry: data.enquiry
    }

    const res = await fetch("/api/sheets", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    })

    const result = await res.json();
    if (result.status === "OK") {
      toast.success("Form submitted successfully!");
      handleClose();
    } else {
      toast.error("Failed to submit form.");
    }

    } catch (e) {
      console.error(e)
      toast.error('Something went wrong, please try again!')
    } finally {
      setLoading(false)
    }
  }

  const handleClear = () => {
    reset()
  }

  const handleClose = () => {
    handleClear()
    onClose()
  }
  return (
    <Modal
     open={open}
     onClose={handleClose}
    >
      <div className="flex items-center justify-start gap-6 mb-8">
        <div className="rounded-md bg-[#fcd38a] p-4 flex items-center justify-center">
          <AiFillProduct className="text-white" size={30}/>
        </div>
        <div className='flex flex-col gap-1'>
          <div className="text-[24px] text-black font-bold">Heliogic Product Enquiry</div>
          <div className="text-[14px] text-black ">Please provide the information in this form to get in touch with us.</div>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mx-auto gap-2'>
        <FormField label='Name' error={errors?.name?.message}>
          <Input
           register={register('name')}
           type='text'
           placeholder='Input your name'
          />
        </FormField>
        <FormField label='Email' error={errors?.email?.message}>
          <Input
           register={register('email')}
           type='email'
           placeholder='Input your email'
          />
        </FormField>
        <FormField label='Product Interest' error={errors?.interest?.message}>
          <CheckboxGroup<FormValues>
            control={control}
            name='interest'
            options={ProductOptions}
          />
        </FormField>
        <FormField label='Schedule Appointment' error={errors?.schedule?.message}>
          <DateTimePicker<FormValues>
           control={control}
           name='schedule'
          />
        </FormField>
        <FormField label='Enquiry' error={errors?.enquiry?.message}>
          <Textarea
           register={register('enquiry')}
          />
        </FormField>
        <div className='pt-8 flex items-center justify-end gap-8'>
          {
            !loading && (
              <button type='button' onClick={() => handleClear()} className='btn btn-ghost'><IoMdRefresh size={20}/>Clear Form</button>
            )
          }
          <button type='submit' className={`btn flex items-center gap-2 ${loading ? "bg-gray-500 text-white cursor-not-allowed pointer-events-none opacity-60": "bg-black hover:bg-black/90 text-white"}`}>
            {loading ? (
              <>
                <span className="loading loading-spinner loading-sm"></span>
                Sending...
              </>
            ) : (
              <>
                Send <FaArrowRight size={20} className="text-white"/>
              </>
            )}
          </button>
        </div>
      </form>
    </Modal>
  )
}

export default ScheduleForm