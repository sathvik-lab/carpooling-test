import { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

const style = {
    wrapper: `flex-1 h-full w-full`,
}

mapboxgl.accessToken = 'pk.eyJ1Ijoic2F0aHZpazA3IiwiYSI6ImNsNWo5eDdhODA0Zmgzam1vMDI5czU5NGQifQ.SpHZy8r8m8KhFlpeMiwE_g';



const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [-99.29011, 39.39172],
          zoom: 3,
    })
}, [])

    return ( 
    <div className={style.wrapper}> Map </div>
    )
}

export default Map