import Count from "./Count";
import ButtonContainer from "./ButtonContainer";
import ResetButton from "./ResetButton";
import TitleTeam from "./TitleTeam";
import CountButton from "./CountButton";
import { useEffect, useState } from "react";

export default function Card({ team }) {
  const [count, setCount] = useState(0);
  const locked = count === 40 ? true : false;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        const newCount = count + 1;
        if (newCount > 10) {
          setCount(10);
          return;
        }
        setCount(count + 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [count]);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <TitleTeam team={team} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton type="minus" setCount={setCount} locked={locked} />
        <CountButton type="plus" setCount={setCount} locked={locked} />
      </ButtonContainer>
    </div>
  );
}
