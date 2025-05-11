import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MobileNavigation from "./Components/MobileNavigation";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBannerData , setImageURL} from "./Store/MovieoSlice";

const App = () => {

const dispatch = useDispatch()

const fetchTrendData = async()=>{
  try {
    const response =await axios.get('/trending/all/week')
    dispatch(setBannerData(response.data.results))
  } catch (error) {
    console.log(error)
  }
}

const fetchConfiguration = async() =>{
  try {
    const response = await axios.get("/configuration")
    dispatch(setImageURL(response.data.images.secure_base_url+"original"))
  } catch (error) {
    console.log(error)
  }
}

useEffect(()=>{
  fetchTrendData()
  fetchConfiguration()
},[])

  return (
    <main>
      <Header />
      <div className="min-h-[90vh]">
      <Outlet />
      </div>
      <Footer />
      <MobileNavigation/>
    </main>
  );
}

export default App;
