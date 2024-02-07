import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
import "./Lottery.css";

export default function Lottery({n = 3, winningSum = 15}) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning = sum(ticket) === winningSum;

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
      <button className="lottery-button" onClick={buyTicket}>
        Buy New Ticket
      </button>
    </div>
  );
}
