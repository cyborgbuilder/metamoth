import React from 'react'
import styled from 'styled-components'

function Roadmap() {
  return (
    <Container>
      <Wrap></Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 400vh;
    background:  linear-gradient(180deg, #0000004A 0%, #000000 100%), url('/images/path.png');
    background-size: contain;;
    background-repeat: no-repeat;

`

const Wrap = styled.div``
export default Roadmap
