import React from 'react'

const Experience = () => {
    return (
        <div id='experience' className='flex min-h-screen w-full flex-col items-center justify-center gap-20 p-14 md:p-20 lg:p-36'>
            <h1 className='text-center text-5xl font-light'>Experience</h1>

            <div className='flex flex-wrap gap-0 md:flex-nowrap md:gap-10'>
                <div className='flex-1'>
                    <div className='relative space-y-1 border-l-2 p-8 text-left'>
                        <h3 className='text-lg font-semibold md:text-2xl'>MTS Yapinur Sarakan School</h3>
                        <p className='font-light text-lg text-gray-600'>Website Developer</p>
                        <p className='text-sm text-gray-600'>Developing an academic information system using CodeIgniter and MySQL as a database.</p>
                        <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-red-600'></span>
                    </div>
                </div>
                <div className='flex-1'>
                    <div className='relative space-y-1 border-l-2 p-8 text-left'>
                        <h3 className='text-lg font-semibold md:text-2xl'>PT Visionet Data International</h3>
                        <p className='font-light text-lg text-gray-600'>Contact Center Agent</p>
                        <p className='text-sm text-gray-600'>Handle and analyze customer complaints via email and live chat and work closely with the team to provide fast and effective solutions.</p>
                        <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-red-600'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
