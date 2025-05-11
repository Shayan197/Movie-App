import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetchDetails from '../Hooks/useFetchDetails'
import { useSelector } from 'react-redux'
import moment from 'moment'
import Divider from '../Components/Divider'
import HorizintalScrollCard from '../Components/HorizintalScrollCard'
import VedioPlay from './VedioPlay'


const DetailePage = () => {
  const params = useParams()
  const [playVideo, setPlayVideo] = useState(false)
  const [playVideoId, setPlayVideoId] = useState("")
  const { data } = useFetchDetails(`/${params?.explore}/${params?.id}`)
  const { data: castData } = useFetchDetails(`/${params?.explore}/${params?.id}/credits`)
  const { data: similarData } = useFetchDetails(`/${params?.explore}/${params?.id}/similar`)
  const { data: recomendationData } = useFetchDetails(`/${params?.explore}/${params?.id}/recommendations`)
  // console.log("Similar", similarData)
  // console.log("Data is", data)
  // console.log("CastData is", castData)

  const imageURL = useSelector(state => state.movieoData.imageURL)
  const duration = (data?.runtime / 60).toFixed(1).split('.')
  const writer = castData?.crew?.filter(el => el?.job === "Writer" || el?.job === "Producer")?.map(el => el?.name)?.join(",")
  const movieDuration = `${duration[0]}h ${duration[1]}m`
  const SeasonDuaration = `${data?.number_of_seasons} Seasons and ${data?.number_of_episodes} Episodes`
  const handlePlayVeddio = (data) => {
    setPlayVideoId(data)
    setPlayVideo(true)
  }
  // console.log("Writer is", writer)

  return (
    <div>
      <div className='w-full h-[280px] relative hidden lg:block'>
        <div className='w-full h-full'>
          <img
            src={imageURL + data?.backdrop_path}
            className='h-full w-full object-cover'
            alt='img'
          />
        </div>
        <div className='absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent'>
        </div>
      </div>
      <div className='container mx-auto lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10'>
        <div className='relative mx-auto lg:-mt-28 lg:mx-0 w-fit min-w-60'>
          <img
            src={imageURL + data?.poster_path}
            className='h-80 w-60  object-cover rounded'
            alt='img'
          />
          <button onClick={() => handlePlayVeddio(data)} className='mt-3 w-full py-2 px-4 text-center bg-white text-black font-semibold text-xl rounded hover:bg-gradient-to-l from-red-700 to-orange-500 hover:scale-105 transition-all'>Play</button>
        </div>
        <div className='px-3 lg:px-0'>
          <h2 className='text-2xl lg:text-3xl font-semibold text-white pb-1'>{data?.title || data?.name}</h2>
          <p>{data?.tagline}</p>
          <Divider />
          <div className='flex items-center gap-3'>
            <p>
              Rating : {Number(data?.vote_average).toFixed(1)}+
            </p>
            <span>|</span>
            <p>
              View : {Number(data?.vote_count).toFixed(0)}
            </p>
            <span>|</span>
            <p>
              Duration: {
                params.explore === 'movie'
                  ? movieDuration
                  : params.explore === 'tv'
                    ? SeasonDuaration
                    : "N/A"
              }
            </p>
          </div>
          <Divider />
          <div>
            <h2 className='text-xl font-semibold text-white'>Overview</h2>
            <p>{data?.overview}</p>
            <div className='flex items-center gap-3 my-3 text-center'>
              <p>
                Status : {data?.status}
              </p>
              <span>|</span>
              <p>
                Release Date : {moment(data?.release_date).format("MMMM Do YYYY") || moment(data?.last_air_date).format("MMMM Do YYYY")}
              </p>
              <span>|</span>
              <p>
                Revenue : {data?.revenue}
              </p>
            </div>
          </div>
          <Divider />
          <div>
            <p>
              <span className='text-white'>Director :</span> {castData?.crew[0]?.name}
            </p>
            <Divider />
            <p>
              <span className='text-white'>Writer :</span> {writer}
            </p>
          </div>
          <Divider />
          <h2 className='font-semibold text-lg'>Cast :</h2>
          <div className='grid grid-cols-[repeat(auto-fit,96px)] gap-5 my-4'>
            {
              castData?.cast?.filter(el => el?.profile_path).map((starCast, index) => {
                return (
                  <div>
                    <div>
                      <img
                        src={imageURL + starCast?.profile_path}
                        alt='starcast_img'
                        className='w-24 h-24 rounded-full object-cover'
                      />
                    </div>
                    <p className='mt-1 font-semibold text-center text-sm text-neutral-400'>{starCast?.name}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div>
        <HorizintalScrollCard data={similarData?.results} heading={"Similar " + params?.explore} media_type={params?.explore} />
        <HorizintalScrollCard data={recomendationData?.results} heading={"Recommended " + params?.explore} media_type={params?.explore} />
      </div>
      {
        playVideo && (
          <VedioPlay data={playVideoId} close={() => setPlayVideo(false)} media_type={params?.explore}/>
        )
      }
    </div>
  )
}

export default DetailePage
