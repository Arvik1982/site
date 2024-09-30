export default function PhoneIcon({size='n'}:{size?:string}) {
  return (
    <svg
    style={
      size === "s"
        ? { zIndex: "100", height: "15px", width: "15px" }
        : { zIndex: "100", height: "30px", width: "30px" }
    }
      viewBox="0 0 16.00 16.00"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(0)"
      stroke="#000000"
      strokeWidth="0.00016"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#CCCCCC"
        strokeWidth="0.032"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M1 5V1H7V5L4.5 7.5L8.5 11.5L11 9H15V15H11C5.47715 15 1 10.5228 1 5Z"
          fill="#271276"
        ></path>{" "}
      </g>
    </svg>
  );
}
