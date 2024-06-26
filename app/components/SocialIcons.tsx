import React from 'react'
import Image from "next/image";
import Link from "next/link";


const SocialIcons = (props:any) => {
  return (
        <Link href={props.path} target='blank' className='flex justify-around w-full'>
            <Image src={props.iconSvg} alt="img" className={`${props.widthStyle ? props.widthStyle : 'w-2/4'} animate-bounce`}/>
         </Link>
  )
}

export default SocialIcons