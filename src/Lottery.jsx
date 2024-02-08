import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
import "./Lottery.css";
import Button from "./Button";

export default function Lottery({n = 3, winCondition}) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning = winCondition(ticket);

  let buyTicket = () =>{
    setTicket(genTicket(n));
  }
  return (
    <div className="lottery-container">
      <h1 className="lottery-title">Lottery Game!</h1>
      <h3 className="lottery-result">{isWinning && "Congratulations, You Won!"}</h3>
      <div className="lottery-ticket">
        <Ticket ticket={ticket} />
      </div>
      <Button action={buyTicket}/>
    </div>
  );
}
