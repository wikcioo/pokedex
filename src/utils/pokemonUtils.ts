export function getQualityPokemonImage(id: number): string {
  return (
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
    id +
    ".png"
  );
}

export function getShortStatName(statName: string): string {
  switch (statName.toLowerCase()) {
    case "attack":
      return "atk";
    case "defense":
      return "def";
    case "special-attack":
      return "sp-atk";
    case "special-defense":
      return "sp-def";
    case "speed":
      return "spd";
    default:
      return statName;
  }
}

export function getStatNameColorScheme(statName: string): string {
  switch (statName.toLowerCase()) {
    case "hp":
      return "red";
    case "attack":
      return "orange";
    case "defense":
      return "blue";
    case "special-attack":
      return "purple";
    case "special-defense":
      return "green";
    case "speed":
      return "yellow";
    default:
      return "gray";
  }
}

export function getPokemonTypeColorMix(types: string[]): string {
  const typeColors: string[] = [];
  types.forEach((type) => {
    typeColors.push(getPokemonTypeColor(type));
  });

  let combinedColor = "#FFFFFF";
  typeColors.forEach((typeColor) => {
    combinedColor = blendColors(combinedColor, typeColor);
  });

  return combinedColor;
}

export function getPokemonTypeColor(type: string): string {
  switch (type.toLowerCase()) {
    case "bug":
      return "#A8B820";
    case "dark":
      return "#705848";
    case "dragon":
      return "#7038F8";
    case "electric":
      return "#F8D030";
    case "fairy":
      return "#EE99AC";
    case "fighting":
      return "#C03028";
    case "fire":
      return "#F08030";
    case "flying":
      return "#A890F0";
    case "ghost":
      return "#705898";
    case "grass":
      return "#78C850";
    case "ground":
      return "#E0C068";
    case "ice":
      return "#98D8D8";
    case "normal":
      return "#A8A878";
    case "poison":
      return "#A040A0";
    case "psychic":
      return "#F85888";
    case "rock":
      return "#B8A038";
    case "steel":
      return "#B8B8D0";
    case "water":
      return "#6890F0";
    default:
      return "#FFFFFF";
  }
}

function blendColors(color1: string, color2: string): string {
  const c1 = hexToRgb(color1);
  const c2 = hexToRgb(color2);

  const r = Math.round((c1.r + c2.r) / 2);
  const g = Math.round((c1.g + c2.g) / 2);
  const b = Math.round((c1.b + c2.b) / 2);

  return rgbToHex(r, g, b);
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return { r, g, b };
}

function rgbToHex(r: number, g: number, b: number): string {
  const hexR = r.toString(16).padStart(2, "0");
  const hexG = g.toString(16).padStart(2, "0");
  const hexB = b.toString(16).padStart(2, "0");
  return `#${hexR}${hexG}${hexB}`;
}
