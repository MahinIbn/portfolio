import Link from 'next/link';
import React from 'react'
import {FaGithub, FaLinkedinIn} from'react-icons/fa'


const social =[
    { icon: <FaGithub/>, path:"https://github.com/MahinIbn"},
    { icon: <FaLinkedinIn/>, path:"https://www.linkedin.com/in/maheen-17786311a/"}
];

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {social.map((item, index)=>{
            return(
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Socials