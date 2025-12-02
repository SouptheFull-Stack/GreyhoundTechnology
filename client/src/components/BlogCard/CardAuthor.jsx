import authorIcon from "../../../public/authorIcon.svg";

export default function CardAuthor() {
     return (
          <div className="flex flex-row gap-1 mt-auto">
               <img src={authorIcon} className=""></img>
               <h6 className="text-gray-100 font-[Markazi-Text]">Mitra Ahmadi Pirshahid</h6>
          </div>
     );
}