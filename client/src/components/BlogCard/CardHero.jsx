import finance from "../../../public/finance.jpg";
// import CardCategory from "./CardCategory.jsx";

export default function CardHero() {
     return (
          <div >
               <img src={finance} className="object-contain w-full rounded-lg"></img >
          </div>
          // {/* <div className="w-full h-full">
          //      <CardCategory />
          // </div> */}
     );
}