import { url } from "inspector";

export default function AboutPage() {
  return (
    <>
    <div className=" items-center justify-center max-h-full mx-auto w-full bg-linear-240 from blue-200 to bg-yellow-200 ">
      <div className=" grid-cols-1 md:grid-cols-2 grid text-black items-center justify-center  text-6xl md:h-320 lg:h-590 p-4">
       <div className="text-black">
        <div className="p-4 md:p-8">
          <img 
          className="items-center justify-center"
            src="\gallery\smile\PHOTO-2026-06-14-21-56-07.jpg"
            alt="Girl Smiling"
            loading="lazy"
          />
          </div>
          </div>
       <div className="text-sm md:text-xl lg:text-3xl">
        <h1 className="underline mb-8 font-bold leading-3 font-stretch-condensed">About us</h1>
        <p>Haitian Youth Foundation is a non profit organization established in the state of New York, USA, 
          under the Internal Revenue Code 501(c)(3) as a charitable organization.
With the support of friends and family, we have been actively helping various schools and orphanages in Haiti, 
since the earthquake of 2010. However, the demands far exceeded our meager means. Therefore we decided to 
officially create a Foundation, in order to reach out to a broader public.
</p>
<div>
</div>

       </div>
       <div className="gap-8 mx-auto overflow-hidden p-2 md:p-6">
        <h1 className="text-sm lg:text-3xl xl:text-4xl font-stretch-condensed font-bold underline">Our Core Values</h1>
         <div className="grid grid-cols-2 justify-center items-center text-sm md:text-3xl text-ellipsis overflow-hidden">
        <div className="text-sm lg:text-2xl xl:text-3xl gap-6">
          <h2 className="p-2 italic bold">Education</h2>
        <p className=""> we believe that access to quality education is 
          the foundation for a brighter future and a more empowered Haiti.</p>
          </div>
         <div className=" text-sm lg:text-2xl xl:text-3xl p-2" >
          <h2 className="p-2 italic bold">Community Engagement</h2>
        <p> We foster a spirit of service and responsibility 
          encouraging youth to actively contribute to the well-being of their communities</p>
          </div>
         <div className=" text-sm lg:text-2xl xl:text-3xl p-2">
          <h2 className="p-2 italic bold">Cultural Pride</h2>
        <p> We promote an understanding & appreciation of Haiti's rich heritage, 
          helping children stay connected to roots while building their future.</p>
          </div>
         <div className=" text-sm lg:text-2xl xl:text-3xl p-6 gap-8">
          <h2 className="p-2 italic bold">Empowerment
             </h2>
        <p> We aim to equip Haiti's youth with the skills, resources, and 
          confidence they need to shape their own destiny and lead positive change.
          </p>
        </div>

       </div>
       </div>
      
       <div className="">
          <img 
          className="items-center justify-center max-w-100 lg:max-w-120"
            src="\gallery\girlwriting.jpg"
            alt="Girl Smiling"
            loading="lazy"
          />
          </div>
      </div>
    </div>
   
    </>
  )
}