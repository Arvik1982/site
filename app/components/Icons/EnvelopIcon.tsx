export default function EnvelopeIcon({ size = "n" }: { size?: string }) {
  return (
    <div style={size==='s'?{width:'18px',display:'flex',justifyContent: 'center'}:{}}>
    <svg
      style={
        size === "s"
          ? { zIndex: "100", height: "15px", width: "15px" }
          : { zIndex: "100", height: "30px", width: "30px" }
      }
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M0 5.3585V14H16V5.35849L8 10.3585L0 5.3585Z"
          fill="#271276"
        ></path>{" "}
        <path d="M16 3V2H0V3L8 8L16 3Z" fill="#271276"></path>{" "}
      </g>
    </svg>
    </div>
  );
}
