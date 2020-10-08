import styled from "styled-components";
import Layout from "../components/Layout";
import StuntDoubleCard from "../components/StuntDoubleCard";
import { stuntDoubleList } from "../utils/sample-data";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import { useEffect, useState } from "react";

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const DraggableContainer = styled(animated.div)`
  position: absolute;
`;

const IndexPage = () => {
  const [threshold, setThreshold] = useState(0);
  const [likes, setLikes] = useState(new Map<number, boolean>());
  const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }));
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    // going for about half of the right-hand side as the threshold
    const t = window.innerWidth / 4;
    console.log("threshold is", t);
    setThreshold(t);
  }, []);

  const bind = useDrag(({ args: [index], down, movement: [mx, my] }) => {
    console.log({ down, threshold, mx, index, currentIndex });
    const dirLeft = mx < 0;
    const dirRight = mx > 0;

    if (
      dirLeft &&
      Math.abs(mx) >= threshold &&
      !down &&
      index === currentIndex
    ) {
      setLikes((l) => new Map<number, boolean>(l.set(index, false)));
      setCurrentIndex((c) => c + 1);
    }

    if (dirRight && mx >= threshold && !down && index === currentIndex) {
      setLikes((l) => new Map<number, boolean>(l.set(index, true)));
      setCurrentIndex((c) => c + 1);
    }

    set({ x: down ? mx : 0, y: down ? my : 0 });
  });

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <CardsContainer>
        {stuntDoubleList.map((s, index) => {
          const zIndex = stuntDoubleList.length - index;

          if (likes.has(index)) return null;

          if (index === currentIndex) {
            return (
              <DraggableContainer
                key={s.id}
                {...bind(index)}
                // TODO: check why ts is complaining about using zIndex typed to a number
                // @ts-ignore
                style={{ x, y, zIndex }}
              >
                <StuntDoubleCard {...s} liked={likes.has(s.id)} />
              </DraggableContainer>
            );
          } else {
          }
          return (
            <div
              style={{ position: "absolute", zIndex, marginTop: index * 20 }}
            >
              <StuntDoubleCard {...s} />
            </div>
          );
        })}
      </CardsContainer>
    </Layout>
  );
};

export default IndexPage;
