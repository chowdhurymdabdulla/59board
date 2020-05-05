import React, { useState } from react
import styled from 'styled-components'

const Input = styled.input`

`

const DistrictSearch = ({districts}) => { 
    const [searchValue, setSearchValue] = ''
    const [isValidSearchValue, setIsValidSearchValue] = true

    function _searchSubmit(){

    }

    checkDistrict(districtNum) {
        return districts.features.some(
          (feature) => feature.properties.BoroCD === boroCD
        )
      }
      

    function _searchChange(event){
        const districtNum = event.target.value
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