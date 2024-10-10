import EnvelopeIcon from "../../Icons/EnvelopIcon";

export default function Mail({size='n', color='black'}:{size?:string, color?:string}) {
  return (
    
    <div style={{display:'flex', gap:'10px',alignItems:'center'}}>
      <EnvelopeIcon size={size} />
      <a style={{color:`${color}`}} href="mailto:mail@mail.com">mail@mail.com</a>
    </div>
  );
}
