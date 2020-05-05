import React, {useState } from 'react'
import ExpandOverlay from '../components/ExpandOverlay'
import useWindowSize from '../utils/useWindowSize'
import styled from 'styled-components'

const Main = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    height: 100%;
`

const Content = styled.div`
    max-width: 1000px;
    margin: 20px auto;
    padding: 0 20px;
    color: #444444;
    overflow-y: auto;
    flex: 1 1 500px; 
`

const SideContent = styled.div`
    flex: 1 1 229px;
    height: 100vh;
    background-color: #c6c6c6;
    box-shadow: -3px 0px 3px 0px rgba(161,161,161,0.2);
    
    @media only screen and (max-width: 768px) {
      height: ${props => props.expanded ? '35vh' : '10vh'} // expand when clicked
    }
`

function Home() {
    const [sideContentExpanded, setSideContentExpanded] = useState(false)
    const size = useWindowSize()

    function _expandSideContent(){
        setSideContentExpanded(!sideContentExpanded)
    }

    return (
        <Main>
            <Content>
                <h2>59 Community Boards</h2>
                <p>New York City's government includes a system of 59 community board districts that offer a way for
                    the
                    public to get involved with local politics. Many New Yorkers don't know they exist, and the
                    process
                    to
                    get involved can seem overwhelming.</p>
                <p>Most boards don't provide an easy way to get notified of upcoming meetings, making participation
                    difficult. 59Boards scrapes event information from board websites and provides a feed for your
                    calendar
                    app's subscription feature.</p>
            </Content>
            <SideContent expanded={sideContentExpanded}>
                {/*when width is mobile and sideContent hasn't been expanded overlay with expand "button"*/}
                {size.width <= 768 ? <ExpandOverlay onClick={_expandSideContent} expanded={sideContentExpanded}/>: null}
            </SideContent>
        </Main>
    )
}

export default Home