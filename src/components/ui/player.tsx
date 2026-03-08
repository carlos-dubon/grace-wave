import { Card } from "./card";

interface PlayerProps {
  className?: string;
}

export const Player = (props: PlayerProps) => {
  return <Card className={props.className}>Player</Card>;
};
