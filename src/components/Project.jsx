import React from 'react'

const Project = () => {
  return (
    <div id='projects' className='min-h-screen w-full flex flex-col items-center justify-center gap-20 p-10 md:p-16 xl:px-32'>
      <h1 className='text-center text-5xl font-light'>Projects</h1>

      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
        <div className='text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-red-500 rounded-lg hover:bg-red-50'>
            <h1 className='text-3xl font-semibold'>Academic Information System</h1>
            <h3 className='text-xl text-gray-700'>CodeIgniter</h3>
            <p className='text-sm text-gray-600'>Developing an academic information system using CodeIgniter and MySQL as a database.</p>
        </div>

        <div className='text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-red-500 rounded-lg hover:bg-red-50'>
            <h1 className='text-3xl font-semibold'>Disease Diagnosis Expert System</h1>
            <h3 className='text-xl text-gray-700'>Laravel</h3>
            <p className='text-sm text-gray-600'>The project was created to complete the final thesis assignment.</p>
        </div>

        <div className='text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-red-500 rounded-lg hover:bg-red-50'>
            <h1 className='text-3xl font-semibold'>Quiz Apps</h1>
            <h3 className='text-xl text-gray-700'>React</h3>
            <p className='text-sm text-gray-600'>The project was created to complete a job application exam.</p>
        </div>

        <div className='text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-red-500 rounded-lg hover:bg-red-50'>
            <h1 className='text-3xl font-semibold'>Valorant Information</h1>
            <h3 className='text-xl text-gray-700'>React</h3>
            <p className='text-sm text-gray-600'>The first project created after completing ReactJS learning.</p>
        </div>

        <div className='text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-red-500 rounded-lg hover:bg-red-50'>
            <h1 className='text-3xl font-semibold'>Notes Apps</h1>
            <h3 className='text-xl text-gray-700'>Flutter</h3>
            <p className='text-sm text-gray-600'>Project created while taking flutter training.</p>
        </div>

        <div className='text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-red-500 rounded-lg hover:bg-red-50'>
            <h1 className='text-3xl font-semibold'>Google Maps</h1>
            <h3 className='text-xl text-gray-700'>Flutter</h3>
            <p className='text-sm text-gray-600'>Project created while taking flutter training.</p>
        </div>
      </div>
    </div>
  )
}

export default Project
