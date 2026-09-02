

export const MembersCard = ({ name, bio, image, role }: { name: string; bio: string; image: string; role: string }) => {
    return( <div className="flex flex-col items-center text-wrap gap-4 max-w-full h-72 border p-4 rounded-3xl bg-green-800 border-green-200 transition-opacity duration-300">
        {/*<img src={image} alt={name} className="w-32 h-32 rounded-full object-cover " />*/}
        <div className="mx-auto p-4 items-center text-center overflow-hidden text-ellipsis max-w-full border-b">
        <h2 className="font-heading text-xl font-bold py-2 text-blue-200">{name}</h2>
        <h2 className="font-heading text-lg font-semibold py-2 text-amber-100 opacity-50">{role}</h2>
        <p className="font-body text-sm md:text-base lg:text-lg overflow-hidden text-ellipsis text-center text-gray-300">
          {bio}
        </p>   
            </div>
            </div>
         
    )   
}