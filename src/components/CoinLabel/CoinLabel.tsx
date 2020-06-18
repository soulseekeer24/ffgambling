import React from "react";
import styled from "styled-components";
import coinImage from '../../assets/moneda.png';

const Wrapper = styled.div`
    margin-right: 20px;
    span{
        color: white;
        font-size: 24px;
    }
    img{
        margin : 2px;
        vertical-align:middle;
        height: 32px;
    }
`;

type Props = {
    coinAmount: number;
}

const CoinLabel = (props: Props) => {
    return (
        <Wrapper>
            <span> {props.coinAmount}  <img src={coinImage} alt="coinImage"/></span>

        </Wrapper>
    )
}

export default CoinLabel;