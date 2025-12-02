import arrow from "../../../public/up-arrow.svg";

export default function CardArrow() {
     return (
          <div className="absolute w-8 h-8 right-2 bottom-2">
               {/* <div className="flex flex-row justify-end"></div> */}
               <img src={arrow} className="w-full h-full bg-green"></img>
          </div >
     );
}