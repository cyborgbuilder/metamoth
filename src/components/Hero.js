import React from 'react'
import styled from 'styled-components'

function Hero() {
  return (
    <Container>
      <Wrap>
        <Left>
            <h1>The Metamoths</h1>
            {/* <p>A new era as arrived and they won’t be here for long and with as much as 5000 Metamoths coming into circulation over the next 12 months it’s time to begin your journey with exclusive prospects for holders and unlimited possibilities along the quest to become a Metamoth warrior.</p>
            <p>Our journey will begin together with the NFTS the ultimate way to fund our concept.</p>
            <p>There will be a community for all purpose chitchat and discussion about where we can go next.</p>
            <p>The proposal of a new metaverse crypto/blockchain based battling game is in the not so distant future.</p>
            <p>along with its ecosystem and community</p>
            <ul>
                <li>Metamoths-Game</li>
                <li>Metamoths-Marketplace</li>
                <li>Metamoths-Crypto</li>
                <li>Metamoths-N.F.Ts</li>
                <li>Metamoths-Storyline</li>
                <li>Metamoths-Comic books</li>
                <li>Metamoths-Ebook</li>
                <li>Metamoths-Films</li>
                <li>Metamoths-Cartoons</li>
                <li>Metamoths-Merchandise</li>
            </ul> */}

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Quisque non tellus orci ac. Pharetra diam sit amet nisl suscipit. Risus commodo viverra maecenas accumsan lacus. Sem fringilla ut morbi tincidunt. Fermentum leo vel orci porta non. Nibh ipsum consequat nisl vel pretium lectus quam id. Mollis nunc sed id semper risus. Elementum curabitur vitae nunc sed. Et malesuada fames ac turpis. Proin sagittis nisl rhoncus mattis. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc. Et malesuada fames ac turpis egestas maecenas.

Sed id semper risus in hendrerit gravida. Consectetur purus pulvinar elementum. Neque volutpat ac tincidunt vitae semper quis. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Porta nibh venenatis cras sed felis eget velit. Purus semper eget duis at tellus at. Commodo quis imperdiet massa tincidunt. Sed egestas egestas fringilla phasellus. Porta non pulvinar neque laoreet suspendisse interdum. Sit amet tellus cras adipiscing. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Scelerisque felis imperdiet proin fermentum leo vel orci porta non.</p>
        </Left>
        <Right></Right>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 160vh;
    background: linear-gradient(180deg, #0000004A 0%, #000000 100%), url('/images/bg.png');
    background-size: cover;
    display: flex;
    justify-content: center;
`

const Wrap = styled.div`
    width: 95%;
    display: flex;

`

const Left = styled.div`
    width: 50%;
    padding: 20px 10px;

    p{
        font-size: 20px;
        text-align: center;
        margin: 10px 0;
        letter-spacing: 1.1px;
        padding: 10px;
        line-height: 2.1rem;
        margin-top: 40px;
    }

    h1{
        font-size: 80px;
        text-align: center;
    }
    ul{
        text-align: center;
        margin: 10px 0;
    }
    li{
        margin: 7px 0;
    }
`

const Right = styled.div`
    width: 50%;
`
export default Hero
