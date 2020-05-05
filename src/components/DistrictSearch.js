import React, { useState } from 'react'
import styled from 'styled-components'

const Input = styled.input`
  
`

const DistrictSearch = ({districts, setSelectedDistrict}) => {
    const [searchValue, setSearchValue] = useState('')
    const [isValidSearchValue, setIsValidSearchValue] = useState(false)

    function _searchSubmit(event){
        if(isValidSearchValue){
            setSelectedDistrict(searchValue)
        }
        event.preventDefault();
    }

    function checkDistrict(districtNum){
        return districts.features.some(
          (feature) => feature.properties.BoroCD === districtNum
        )
      }
      

    function _searchChange(event){
        const districtNum = parseInt(event.target.value)
        if (!checkDistrict(districtNum)) {
          //if input not valid then set isValidSearchValue to false
          setIsValidSearchValue(false)
        } else {
            setIsValidSearchValue(true)
        }
        setSearchValue(districtNum)
    }

    return (
        <form onSubmit={_searchSubmit}>
            <Input type="text" value={searchValue} onChange={_searchChange}/>
        </form>
    )
}

export default DistrictSearch