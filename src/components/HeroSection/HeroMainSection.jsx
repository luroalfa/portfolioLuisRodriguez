import React from 'react'
import { 
  AboutHeader,
  AboutHeaderbackgroudVideo,
  AboutHeaderContainer,
  Foto,
  Info,
  HeroSpan,
  HeroSpanYellow,
  HeroParagraph,
} from './Styles/HeroMainSectionElements'
import Typical from 'react-typical'
import {Animated} from 'react-animated-css'

function HeroSection() {
  return (
    <AboutHeader>
        <AboutHeaderbackgroudVideo src='../videos/digital.mp4' autoPlay loop muted/>
        <AboutHeaderContainer>
          <Info>
            <div>
              <p>Hi, welcome.</p>
              <h2>My name is</h2>
              <br />
              <HeroSpan>Luis<HeroSpanYellow>Rodríguez</HeroSpanYellow></HeroSpan>
              <p><b><i>"It always seems impossible until it's done."</i></b></p>
              <p>-By Nelson Mandela.</p>
              <br />
              <br />
              <h2>I'm Frontend Developer</h2>
              <HeroParagraph>
                I've experience in{' '}
                <b>
                <Typical
                loop={Infinity}
                wrapper="p"
                steps={[
                  'Web development ',
                  2000,
                  'Graphic design',
                  2000,
                  'Web layout',
                  2000,
                ]}/>
                </b>
              </HeroParagraph>  
            </div>
          </Info>
          <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
            <Foto src="../img/LUIS-CIRCLE.png"/>
          </Animated>
        </AboutHeaderContainer>
      </AboutHeader>
  )
}

export default HeroSection
