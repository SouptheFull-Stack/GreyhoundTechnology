import CardHero from "./CardHero.jsx";
import CardTitle from "./CardTitle.jsx";
import CardIntro from "./CardIntro.jsx";
import CardAuthor from "./CardAuthor.jsx";
import CardArrow from "./CardArrow.jsx";
// bg-[#26677E]

export default function CardBody() {
     return (
          <div className="card w-100 h-125 rounded-lg">
               <a href="https://www.youtube.com/results?search_query=rick+roll" className="w-full h-full rounded-lg p-4 block relative flex flex-col gap-2">
                    <CardHero />
                    <CardTitle />
                    <CardIntro />
                    <div className="mt-auto">
                         <CardAuthor />
                    </div>
                    <CardArrow />
               </a>
          </div>
     );
}