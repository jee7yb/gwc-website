import React from 'react';
import styled from 'styled-components';

interface Props {
  top: string;
  percent: string;
  color: string;
  fact: string;
}

const TopWrapper = styled.h4`
  font-size: 18px;
  font-weight: bold;
  color: $programmer-peacock;
  text-align: center;
  margin-bottom: -15px;
`

const PercentWrapper = styled.p`
  font-size: 70px;
  font-weight: bold;
  text-align: center;
  margin-top: -13px;
  margin-bottom: -22px;
`

const FactWrapper = styled.p`
  color: gray;
  font-size: 10px;
  text-align: center;
  margin-top: -13px;
`;

function Percentage(props: Props) {
  return (
    <div>
      <div className="row d-flex justify-content-center">
        {/* <TopWrapper> */}
        <h4 className="text-peacock text-center font-weight-bold">{props.top}</h4>
        
          {/* <p>{props.top}</p> */}
        {/* </TopWrapper> */}
      </div>
      <div className="row d-flex justify-content-center">
        {/* <PercentWrapper> */}
        <div className={props.color}>
          <h2 className="text-center font-weight-bold">{props.percent}</h2>
        </div>
        
          {/* <p className={props.color}>{props.percent}</p> */}
        {/* </PercentWrapper> */}
      </div>
      <div className="row d-flex justify-content-center">
          <p className="text-dark-grey text-center">{props.fact}</p>
      </div>
    </div>
  );
}

export default Percentage;
