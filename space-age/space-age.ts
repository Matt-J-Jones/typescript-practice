export function age(planet: string, seconds: number): number {
  const earthYear = 31557600;
  const planets: {[key: string]: number} = {
    'earth': 1,
    'mercury': 0.2408467,
    'venus': 0.61519726,
    'mars': 1.8808158,
    'jupiter': 11.862615,
    'saturn': 29.447498,
    'uranus': 84.016846,
    'neptune': 164.79132
  };

  return Number((seconds / (planets[planet] * earthYear)).toFixed(2));
}
