import EnvelopeIcon from "../../Icons/EnvelopIcon";

export default function Mail({size='n'}:{size?:string}) {
  return (
    
    <div style={{display:'flex', gap:'10px',alignItems:'center'}}>
      <EnvelopeIcon size={size} />
      <a href="mailto:mail@mail.com">mail@mail.com</a>
    </div>
  );
}
