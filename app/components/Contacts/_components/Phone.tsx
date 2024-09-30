import PhoneIcon from "../../Icons/PhoneIcon";

export default function Phone({size='n'}:{size?:string}) {
  return (
    <div style={size==='s'?{width:'18px',justifyContent: 'center'}:{}}>
    <div style={{display:'flex', gap:'10px',alignItems:'center'}}>
      <PhoneIcon/> <a href="tel:89217553973">89217553973</a>
    </div></div>
  );
}
