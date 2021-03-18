import React from 'react'
import { useParams } from 'react-router'

import SlideContainer from '../components/SlideContainer'
import ControlArrow from '../components/ControlArrow'
import RootSlides from './RootSlides'

const View: React.FC = () => {
    const { page, animation } = useParams()

    const content = RootSlides()

    return (
        <>
            <SlideContainer>
                { content[page] }
                <ControlArrow />
            </SlideContainer>

        </>
    )

}

export default View