import data from "../data.json";

const Countries = () => {
  return (
    <div className="text-white grid place-items-center">
      <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((country, idx) => (
          <li key={idx}>
            <div className="bg-slate-800 grid grid-rows-2 w-[280px] h-[350px] rounded hover:animate-pulse hover:cursor-pointer overflow-hidden">
              <div>
                <img src={country.flags.svg} alt="Image" className="h-[175px] w-full object-cover "/>
              </div>
              <div className="px-6 py-8">
                <h2 className="pb-4">{country.name}</h2>
                <div className="text-sm text-gray-300">
                  <p>Population: {country.population}</p>
                  <p>Region: {country.region}</p>
                  <p>Capital: {country.capital}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
