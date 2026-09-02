export default function ImpactPage() {
  return (
    <div className="w-full h-svh text-3xl  text-blue-500 items-center 
    justify-center mx-auto flex">
        <div className="">
             <div className=" mx-auto flex items-center">
              <h1 className="mx-auto items-center justify-center font-bold text-6xl">Our Impact</h1>
              </div>
             <div className="grid grid-cols-3 p-8 gap-8 text-4xl font-semibold leading-6">
              <div className="gap-4 p-6 text-sm md:text-lg">
                <h1>Educational Support</h1>
                <p>We are committed to enhancing the quality of education in Haiti
                   by providing essential resources to schools in underserved areas.
                    Our support includes school supplies, books, infrastructure 
                    improvements, and helping to cover teachers’ salaries, 
                    ensuring that educators are fairly compensated for their 
                    critical work. By supporting both students and teachers,
                     we aim to create a nurturing and effective learning
                   environment that fosters academic success and personal growth.</p>
                </div>
              <div className="p-4 gap-4 text-sm md:text-2xl">
                <h1>Orphanage Assistance</h1>
                <p>Many children in Haiti face the harsh reality of
                   growing up without parents due to natural disasters,
                    poverty, and other challenges. The Haitian Youth Foundation 
                    provides direct support to orphanages, offering care packages
                     that include food, clothing, and educational supplies. 
                     Our goal is to ensure that these children have access to a stable,
                      nurturing environment where they can thrive academically and
                   emotionally, helping to secure a brighter future for them.</p>
                </div>
              <div><h1>Community and Cultural Programs</h1></div>
             </div>
      </div>
    </div>
      
  );
}

