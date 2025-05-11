
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Components/Card'

const ExplorePage = () => {
  const params = useParams()
  const [pageNo, setPageNo] = useState(1)
  const [totslPageNo, setTotalPageNo] = useState(1)
  const [data,SetData] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params: {
          page: pageNo
        }
      })
      SetData((prev) => {
        return[
          ...prev,
          ...response.data.results
        ]
      })
      setTotalPageNo(response.data.total_pages)
    } catch (error) {
      console.log("Error",error)
    }
  }

  const handleScroll = () => {
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
      setPageNo(prev => prev + 1)
    }
  }

  useEffect(()=>{
    fetchData()
  },[pageNo])
  
  useEffect(()=>{
    setPageNo(1)
    SetData([])
    fetchData()
  },[params.explore])

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
  },[])

  return (
    <div className='py-16'>
      <div className=' container mx-auto'>
        <h2 className='capitalize text-lg font-semibold lg:text-2xl my-3'>Popular {params.explore}</h2>
        <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start'>
          {
            data.map((exploreData, index) => {
              return(
                <Card key={exploreData.id+"exploreSection"} data={exploreData} media_type={params.explore}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ExplorePage
