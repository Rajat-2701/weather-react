import axios from "axios";
import React, { useState } from "react";
import Icon from "react-icons-kit";
import { search } from "react-icons-kit/feather/search";
import OneDayForecast from "../../OneDayForeacst/OneDayForecast";
import "../Search/Search.css";
import videoBg from '../Search/galaxyHd.mp4';
import mediaBg from '../Search/320px.mp4'
import media_bg from '../Search/2kMedia.mp4';
import { useAlert } from "react-alert";
import { Bars } from "react-loader-spinner";
const Search = () => {
  const [citySearch, setCitySearch] = useState("");
  const [cityData, setCityData] = useState(null);
  const[loading,setLoading] = useState(false);
  const alert = useAlert();
  const fetchCity = (e) => {
    e.preventDefault();
    if(!citySearch){
      alert.show('Please enter a city',{type: 'error'});
    }
    else{
      setLoading(true);
      axios
      .get(
        `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=suObSExGdtMUuUrLJR4LAlk8GfQPaGth=${citySearch}`
      )
      .then((response) => {
        setCitySearch("");
        setCityData(response.data[0]);
        setTimeout(() => setLoading(false), 1000)
      });
    }
  };
  return (
    <>
    {loading? <div className="flex items-center justify-center mt-[12rem] ml-auto mr-auto mb-[12rem]"><Bars duration={1000} /></div> :
    <div className="container mt-[3rem] m-[10rem] rounded-md shadow-3xl ml-auto mr-auto h-[20vh] w-[400px] lg:w-[600px] md:w-[500px] sm:w-[600px] flex items-center overflow-hidden justify-center">
    <div className="overlay fixed top-0 left-0 right-0 bottom-0 w-full bg-[rgba(0,0,0,0.5)]">
    </div>
  <video src={videoBg} className='w-full z-[-1] fixed top-[70px] hidden xl:block lg:block h-auto md:block sm:hidden]' width="100" height="100" autoPlay loop muted> 
  </video>
  <video src={media_bg} className='w-full h-auto fixed top-0 lg:hidden md:hidden sm:block' width="100" height="300" id="video-mob" autoPlay loop muted>
  </video>
  <video src={mediaBg} className='hidden mobile-bg fixed top-[-78px]' width="100" height="300" autoPlay loop muted>
    
  </video>
  <form className="form-group w-[600px] z-50" autoComplete="off" onSubmit={fetchCity}>
    <div className="wrapper flex items-center justify-center">
      <input
        type="text"
        className="form-control w-full z-20 outline-hidden shadow-none focus-within:outline-hidden focus-within:shadow-none"
        placeholder="Search the city...."
        name="city"
        value={citySearch}
        onChange={(e) => setCitySearch(e.target.value)}
      />
      <button type="submit">
        <Icon
          icon={search}
          size={26}
          className="text-black z-10 p-[5px] ml-1 bg-white rounded-md"
        />
      </button>
    </div>
  </form>
</div>
    }
    {/* {typeof cityData != "undefined"
        ? cityData && (
            <div className="p-5 w-full">
              <OneDayForecast cityData={cityData} />
            </div>
          )
        : "no data"} */}
    </>
  );
};

export default Search;
