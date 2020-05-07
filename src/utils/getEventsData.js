import {csvParse} from "d3-dsv";
import {parse} from 'wellknown';

const parseDate = date => {
    return new Date(Date.parse(date + '/2020')) //todo: add year to scraper script
}

const getEventsData = () => {
    //x,y,wkt,district
    return fetch('data/events.csv')
        .then(res => res.text())
        .then(text => {
            const rows = csvParse(text)
            return rows.map(row => ({...row, _date: parseDate(row.date)}))
        })
}

export default getEventsData;