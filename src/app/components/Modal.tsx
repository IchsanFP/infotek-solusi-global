import React, {ReactNode} from 'react'
import { FiX } from 'react-icons/fi'
interface ModalProps {
  open: boolean
  onClose: () => void
  className?: string
  children: ReactNode
}

function Modal({
  open,
  onClose,
  className,
  children
}: ModalProps) {
  return (
    <dialog className={`modal ${open? 'modal-open' : ''}`}>
      <div className={`modal-box bg-[#fdf9e6] text-black w-11/12 relative max-w-5xl ${className}`}>
          <button className={`btn bg-[#fdf9e6] btn-square border border-gray-300 hover:bg-gray-300 hover:border-gray-300 btn-sm absolute top-4 right-4`} onClick={onClose}>
            <FiX size={20} className={'text-black'}/>
          </button>
          {children}
      </div>
    </dialog>
  )
}

export default Modal