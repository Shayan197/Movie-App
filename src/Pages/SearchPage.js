
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from '../Components/Card'


const SearchPage = () => {
  const location = useLocation()
  const [data, SetData] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const navigate = useNavigate()
  const query = location?.search?.slice(3)


  const fetchData = async () => {
    try {
      const response = await axios.get(`/search/multi`, {
        params: {
          query: location?.search?.slice(3),
          page: pageNo
        }
      })
      SetData((prev) => {
        return [
          ...prev,
          ...response.data.results
        ]
      })
    } catch (error) {
      console.log("Error", error)
    }
  }
  // console.log('location', location.search)
  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setPageNo(prev => prev + 1)
    }
  }

  useEffect(() => {
    if(query){
      fetchData()
    }
  }, [pageNo])

  useEffect(() => {
    if (query) {
      setPageNo(1)
      SetData([])
      fetchData()
    }
  }, [location?.search])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='py-16'>
      <div className='mx-3 my-2 sticky top-[70px] z-10 lg:hidden'>
        <input
          className='text-lg text-neutral-900 bg-transparent w-full bg-white outline-none rounded-full px-2 py-1'
          type='text'
          placeholder='Search here'
          onChange={(e) => navigate(`/search?q=${e.target.value}`)}
          value={query?.split("%20")?.join(" ")}
        />
      </div>
      <div className='container mx-auto'>
        <h2 className='capitalize text-lg font-semibold lg:text-2xl my-3'>Search Results</h2>
        <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start'>
          {
            data.map((searchData, index) => {
              return (
                <Card key={searchData.id + "search"} data={searchData} media_type={searchData.media_type} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default SearchPage
