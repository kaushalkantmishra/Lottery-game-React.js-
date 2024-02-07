import TicketNum from "./TicketNum";
import "./Ticket.css"

export default function Ticket({ticket}){
    return (
        <div className="Ticket-head">
            <p>Ticket</p>
            <hr className="hr"/>
        <div className="Ticket">
            {ticket.map((num, idx)=>(
                <TicketNum num={num} key={idx}/>
            ))}
        </div>
        </div>
    );
}