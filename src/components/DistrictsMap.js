import React, {useState, useEffect} from "react";
import L from 'leaflet'
import './label.css'
import 'leaflet/dist/leaflet.css'
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
`

const DistrictsMap = ({districts, size, expand, selectedDistrict, setSelectedDistrict}) => {

    const [map, setMap] = useState(null)
    const [districtsLayer, setDistrictsLayer] = useState(null)

    useEffect(() => {
        //init map
        const maxZoom = 20,
            minZoom = 9,
            bounds = L.latLngBounds([40.44, -74.25], [41, -73.4]),
            attribution = '<a href="https://carto.com/">Carto</a> | <a href="https://www.openstreetmap.org/copyright">OSM</a>'

        const map = L.map('map').setView([40.6944, -73.9314], 11);

        L.tileLayer(
            'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/light_nolabels/{z}/{x}/{y}{r}.png',
            {maxZoom, minZoom, bounds, attribution}
        ).addTo(map)

        setMap(map)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        //when size or expand changes update map
        if (map) map.invalidateSize()
    }, [map, size, expand])

    useEffect(() => {
        //init districtsLayer
        if (map) {
            const style = {
                weight: 1,
                color: "#4175bd",
                opacity: 0.8,
                fillColor: "#dcdcdc",
                fillOpacity: 0.1
            }

            const districtsLayer = L.geoJSON(districts, {
                style, onEachFeature: (feature, layer) => {
                    layer.on('click', event => {
                        setSelectedDistrict(feature.properties.district)
                    })
                }
            }).addTo(map);

            setDistrictsLayer(districtsLayer)

            //add labels using x and y columns
            L.geoJSON(districts, {
                onEachFeature: (feature,layer) => {
                    const {x, y, district} = feature.properties
                    const html = parseInt(String(district).slice(1))
                    L.marker([y,x], {
                        icon: L.divIcon({
                            className: 'label',
                            html,
                            iconSize: [10, 10]
                        })
                    }).addTo(map).on('click', () => {
                        setSelectedDistrict(feature.properties.district)
                    })
                }
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [map, districts])

    useEffect(() => {
        //highlight selectedDistrict
        if (map && districtsLayer && selectedDistrict) {

            map.removeLayer(districtsLayer)

            const getStyle = selected => ({
                weight: 1,
                color: "#4175bd",
                opacity: 0.8,
                fillColor: selected ? "#3fb8b1" : "#dcdcdc",
                fillOpacity: selected ? 0.3 : 0.1,
            })


            const newDistrictsLayer = L.geoJSON(districts, {
                style: feature => {
                    const {district} = feature.properties;
                    const selected = district === selectedDistrict
                    return getStyle(selected)
                }, onEachFeature: (feature, layer) => {
                    layer.on('click', event => {
                        setSelectedDistrict(feature.properties.district)
                    })
                }
            }).addTo(map);

            setDistrictsLayer(newDistrictsLayer)
        }
    }, [map, selectedDistrict])

    return <Container id="map"/>
}

export default DistrictsMap