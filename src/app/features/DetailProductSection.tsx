import React, {useState} from 'react'
import Modal from '../components/Modal'
import { AiFillProduct } from "react-icons/ai";
import { Product } from '@/types/products.type';
import { Input } from '../components/ui/Input';
import { FormField } from '../components/ui/FormField';
import { toast } from 'react-toastify';
import { FaArrowRight } from 'react-icons/fa';
import { BrochureFormValues, brochureFormSchema } from '../components/ui/formSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

interface DetailProductPropsType {
  open: boolean
  closeModal: () => void
  tempData: Product
}

function DetailProductSection({open, closeModal, tempData}: DetailProductPropsType) {
  const [request, setRequest] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const { register, handleSubmit, control, reset, formState: {errors} } = useForm<BrochureFormValues>({
    resolver: zodResolver(brochureFormSchema),
    defaultValues: {
      email: ''
    }
  })

  const toggleRequest = () => {
    setRequest(!request)
    reset()
  }

  const onSubmit = async (data: BrochureFormValues) => {
    try {
      setLoading(true)
      const payload = {
        product: tempData.name,
        email: data.email
      }

        const res = await fetch("/api/brochure", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      const result = await res.json();

      if (result.status === 'OK') {
        toast.success('Your request submitted successfully');
        handleClose()
      }else {
        toast.error("Failed to request.");
      }
    } catch(e) {
      console.error(e)
            toast.error('Something went wrong, please try again!')
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setRequest(false)
    reset()
    closeModal()
  }
  return (
    <Modal
     open={open}
     onClose={closeModal}
    >
      <div className="flex items-center justify-start gap-6 mb-8">
        <div className="rounded-md bg-[#fcd38a] p-4 flex items-center justify-center">
          <AiFillProduct className="text-white" size={30}/>
        </div>
        <div className="text-[24px] text-black font-bold">{tempData.name}</div>
      </div>
      <div className="px-4 xl:px-8 grid grid-cols-12 gap-6 mb-4">
        <div className="col-span-12 xl:col-span-6">
          <div className="flex flex-col gap-4">
            {
              tempData.feature.map((item, index) => (
                <div className="flex items-center justify-start gap-2" key={index}>
                  <div className={`bg-[#fcd38a] rounded-xl p-4 items-center`}>
                    <item.icon size={20} className="text-white"/>
                  </div>
                  <div className="flex flex-col">
                    <div className={`font-semibold text-[14px] text-[${item.color}]`}>{item.title}</div>
                    <div className="text-black text-[12px]">{item.desc}</div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="col-span-12 xl:col-span-6">
          <div className="text-[30px] text-black font-semibold mb-8">{tempData.title}</div>
          <div className="text-[14px] text-black text-justify">{tempData.description}</div>
          <div className='flex items-center justify-end mb-4'>
            <button type='button' onClick={() => toggleRequest()} className='btn bg-black btn-sm'>{request ? "Close Request" : "Request Brochure"}</button>
          </div>
          {
            request && (
              <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mx-auto gap-2'>
                <FormField label='Email' error={errors?.email?.message}>
                  <Input
                   register={register('email')}
                   type='email'
                   placeholder='Input your email'
                  />
                </FormField>
                <div className='w-full flex items-center justify-end'>
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
            )
          }
        </div>
      </div>
    </Modal>
  )
}

export default DetailProductSection