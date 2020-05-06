import {csvParse} from "d3-dsv";
import {parse} from 'wellknown';

const getDistrictData = () => {
    //x,y,wkt,district
    return fetch('data/districts.csv')
        .then(res => res.text())
        .then(text => {
            const rows = csvParse(text)
            return rows.map(row => ({type: "Feature", geometry: parse(row.wkt), properties: row}))
        })
}

export default getDistrictData;