import BannerHome from '../Components/BannerHome'
import { useSelector } from 'react-redux'
import HorizintalScrollCard from '../Components/HorizintalScrollCard'
import useFetch from '../Hooks/useFetch'

const Home = () => {
  const trendinngData = useSelector(state => state.movieoData.bannerData)
  const {data: nowPlayingData} = useFetch('/movie/now_playing')
  const {data: topRatedData} = useFetch('/movie/top_rated')
  const {data: popularTvShow} = useFetch('/tv/popular')
  const {data: onTheAirShow} = useFetch('/tv/on_the_air')

  return (
    <div>
      <BannerHome />
      <HorizintalScrollCard data={trendinngData} heading={"Trending"} trending={true}/>
      <HorizintalScrollCard data={nowPlayingData} heading={"Now Playing"} media_type={"movie"}/>
      <HorizintalScrollCard data={topRatedData} heading={"Top-Rated Movies"} media_type={"movie"}/>
      <HorizintalScrollCard data={popularTvShow} heading={"Popular TV Shows"} media_type={"tv"}/>
      <HorizintalScrollCard data={onTheAirShow} heading={"On Air Shows"} media_type={"tv"}/>
    </div>
  )
}

export default Home
