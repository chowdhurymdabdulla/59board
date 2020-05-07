import React, {useState} from "react";
import styled from 'styled-components'

const Card = styled.div`
    margin-bottom: 20px;
    border-radius: 2px;
    border-top: 1px solid rgb(242, 242, 242);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 1px;
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;

    &:hover{
       background-color: #e0e0e0;
    }
`

const Separator = styled.hr`
    color: aliceblue;
`

const Details = styled.div`
    padding: 10px;
`

function getDistrictName(district) {
    return `Manhattan ${district.slice(1, 3)}`
}

const EventCard = ({event, showDistrict}) => {
    const [opened, setOpened] = useState(false)

    const {title, _date, time, details, district} = event

    return (
        <Card>
            <Title onClick={() => setOpened(!opened)}>
                <strong>{title} </strong>
                {showDistrict ? <span>District: {getDistrictName(district)}</span> : null}
                <span>{_date.toLocaleDateString()} - {time}</span>
            </Title>
            {opened ? (
                <Details>
                    <Separator/>
                    {details}
                </Details>
            ) : null}
        </Card>
    )
}

export default EventCard