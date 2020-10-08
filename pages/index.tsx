import Link from "next/link";
import styled from "styled-components";
import Layout from "../components/Layout";
import StuntDoubleCard from "../components/StuntDoubleCard";
import { stuntDoubleList } from "../utils/sample-data";

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const IndexPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <CardsContainer>
        {stuntDoubleList.slice(0, 1).map((s) => (
          <StuntDoubleCard {...s} />
        ))}
      </CardsContainer>
    </Layout>
  );
};

export default IndexPage;
