import { Country } from "@/type/type";
import Link from "next/link";

type Props = Pick<
  Country,
  "name" | "region" | "population" | "capital" | "numericCode"
> & {
  flag: string;
};

export function RegionCard(props: Props) {
  const { name, region, population, capital, flag, numericCode } = props;

  return (
    <Link
      href={`/${numericCode}`}
      className="w-[264px] h-[336px] flex flex-col bg-white rounded-lg drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] duration-300 ease-in hover:scale-25"
    >
      <div className="w-full h-40">
        <img
          className="aspect-[1.65/1] max-w-[264px] rounded-t-lg drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)]"
          alt={`the ${region}'s national flag`}
          src={flag}
        />
      </div>
      <div className="flex flex-col justify-start items-start px-6 py-8 gap-6">
        <h3 className="font-bold">{name}</h3>
        <div className="flex flex-col gap-2 justify-start">
          <div>
            <span className="text-xs font-bold">Population: </span>
            <span className="text-xs font-light">
              {population.toLocaleString()}
            </span>
          </div>
          <div>
            <span className="text-xs font-bold">Region: </span>
            <span className="text-xs font-light">{region}</span>
          </div>

          <div>
            <span className="text-xs font-bold">Capital: </span>
            <span className="text-xs font-light">{capital}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
