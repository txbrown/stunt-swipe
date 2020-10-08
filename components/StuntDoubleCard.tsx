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
  user-select: none;
  cursor: default;
  position: relative;
`;

const Details = styled.div`
  padding: 24px;
`;

const Cover = styled.div<{ coverImage: string }>`
  display: inline-block;
  width: 100%;
  height: 300px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${(props) => props.coverImage});
`;

const Position = styled.span`
  font-size: 1rem;
`;

const Name = styled.h1`
  font-size: 2rem;
  margin-bottom: 12px;
`;

const Like = styled.span`
  text-transform: uppercase;
  color: palegreen;
  font-size: 24px;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid;
  padding: 12px;
`;

interface IStuntDoubleCardProps extends StuntDouble {
  liked?: boolean;
}

const StuntDoubleCard: React.FunctionComponent<IStuntDoubleCardProps> = ({
  name,
  photo,
  position,
  liked,
}) => {
  return (
    <Wrapper draggable={false}>
      <Cover coverImage={photo.url} />
      <Details>
        <Name>{name}</Name>
        <Position>{position}</Position>
      </Details>
      {liked && <Like>Like</Like>}
    </Wrapper>
  );
};

export default StuntDoubleCard;
