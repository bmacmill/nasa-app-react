import React from "react"

import Main from "./Components/Main"
import SideBar from "./Components/Sidebar"
import Footer from "./Components/Footer"

import { FaGear } from "react-icons/fa6";

function App() {

  const [showModal, setShowModal] = React.useState(false)
  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)
    async function fetchAPIData() {
      const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`

      // caching to prevent too many api calls...
      const today = new Date().toDateString()
      const localKey = `NASA-${today}`

      // if we've been to api today fetch from local storage
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey))
        console.log("--", apiData)
        setData(apiData)
        console.log("fetched from cache today")
        return
      }
      localStorage.clear()

      try {
        const response = await fetch(url)
        const apiData = await response.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log('fetched from api today')
      } catch (err) {
        console.log(err.message)
      }

    }
    setTimeout(() => {
      fetchAPIData()
      setLoading(false)
    }, 1000)



  }, [])

  return (
    <>
      {!loading ? (<Main data={data} />) : <div className="Loading-State Loading-Icon"><FaGear /></div>}
      {showModal &&
        <SideBar data={data} showModal={showModal} setShowModal={setShowModal} />}
      {!loading && <Footer data={data} showModal={showModal} setShowModal={setShowModal} />}
    </>
  )
}

export default App
