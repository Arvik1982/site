import TelegramIcon from "../../Icons/TelegramIcon";

export default function Telegram({size='n'}:{size?:string}) {
  return (
    <div style={{display:'flex', gap:'10px',alignItems:'center'}}>
      <TelegramIcon size={size} />
      <a
        href="tg://resolve?domain=kulikovarseniy"
        target="_blank"
        rel="noopener noreferrer"
      >
       YourTGName
      </a>
    </div>
  );
}
