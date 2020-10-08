import * as React from "react";
import styled from "styled-components";
import { StuntDouble } from "../interfaces";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 300px;
  border-radius: 24px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
`;

const Details = styled.div`
  padding: 24px;
`;

const Image = styled.img`
  display: inline-block;
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

const Position = styled.span`
  font-size: 1rem;
`;

const Name = styled.h1`
  font-size: 2rem;
  margin-bottom: 12px;
`;

interface IStuntDoubleCardProps extends StuntDouble {}

const StuntDoubleCard: React.FunctionComponent<IStuntDoubleCardProps> = ({
  id,
  name,
  photo,
  position,
}) => {
  return (
    <Wrapper>
      <Image src={photo.url} alt={photo.alt} />
      <Details>
        <Name>{name}</Name>
        <Position>{position}</Position>
      </Details>
    </Wrapper>
  );
};

export default StuntDoubleCard;
