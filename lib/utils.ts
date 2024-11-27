import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const getAllCountriesNameAndFlag = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const res2: any = await res.json();

  const countries: { name: string; flag: string }[] = res2.map(
    (country: any) => ({
      name: country.name.common,
      flag: country.flags.png,
    })
  );
  return countries;
};
export function getLast4Digits(number: number) {
  const numberString = number.toString();
  return numberString.slice(-4);
}
