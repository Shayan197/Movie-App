import React from 'react'
import { IoClose } from 'react-icons/io5'
import useFetchDetails from '../Hooks/useFetchDetails'

const VedioPlay = ({data, close, media_type}) => {
    const {data : videoData} = useFetchDetails(`/${media_type}/${data?.id}/videos`)
    console.log("cedioData is",videoData)
  return (
    <section className='fixed bg-neutral-700 top-0 left-0 right-0 bottom-0 z-40 bg-opacity-50 flex justify-center items-center'>
      <div className='bg-black w-full max-h-[80vh] max-w-screen-lg aspect-video rounded relative'>
        <button onClick={close} className='absolute -right-2 -top-7 p-1 text-xl bg-white text-black rounded-full'>
            <IoClose/>
        </button>
        <iframe
            src={`https://www.youtube.com/embed/${videoData?.results?.[0]?.key}`}
            className='w-full h-full'
        />
      </div>
    </section>
  )
}

export default VedioPlay
