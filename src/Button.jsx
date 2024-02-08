export default function Button({action}) {
  return (
    <button className="lottery-button" onClick={action}>
      Buy New Ticket
    </button>
  );
}
