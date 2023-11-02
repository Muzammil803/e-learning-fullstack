import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <nav className='header-main-container flex items-center justify-between pt-6 pb-3 '>

            <div className='header-logo-name  '>
                <Link href={"/"} className='flex align-middle w-fit'>
                    <div className='logo-image-box p-2 py-3 bg-#ff5364 w-12'>
                        <Image className='w-10' src={require("../../dist/webImages/logobook.png")} alt="" />
                    </div>
                    <div className='logo-text-box ml-2 flex items-center font-semibold text-4xl '>Eduvi
                    </div>

                </Link>
            </div>
            <div className="header-nav-drawer ml-7">
                <span className='mx-2'>Shop</span>
                <span className='mx-2'>
                    <div className="dropdown dropdown-hover">
                        <label tabIndex={0} className="m-1 flex flex">For Kindergarden
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div></span>
                <span className='mx-2'>
                    <div className="dropdown dropdown-hover">
                        <label tabIndex={0} className="m-1 flex ">For High School
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div></span>
                <span className='mx-2'>
                    <div className="dropdown dropdown-hover">
                        <label tabIndex={0} className="m-1 flex">For College
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div></span>
                <span className='mx-2'>
                    <div className="dropdown dropdown-hover">
                        <label tabIndex={0} className="m-1 flex">Courses
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div></span>
            </div>
            <div className='header-nav-end ml-4 flex'>
                <div className='mx-2'>
                    <span>Cart</span>
                </div>
                <div className='mx-2'>
                    <span>Account</span>
                </div>
            </div>


        </nav>
    )
}

export default Header