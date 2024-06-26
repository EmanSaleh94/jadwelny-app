import Link from 'next/link'
import React from 'react'



const Btn = (props:any) => {
  return (
    <>
    <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <Link style={props.btnStyle} href={props.path} className={props.btnClassName} >{props.content}
        <span className='text-2xl  w-6 h-6'>→</span>

        </Link>
    </>
  )
}

export default Btn