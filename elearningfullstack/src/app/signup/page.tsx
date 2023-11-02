import Image from 'next/image'
import React from 'react'

const SignUp = () => {
  return (
    <>
    <div className='backShadow'></div>
    <div className='SignUpModal grid'>
      <div className="SignUpModal__left">
        <div>
          <Image src={require("../dist/webImages/1.png")} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default SignUp