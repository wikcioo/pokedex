const idToQualityImgUrl = (id: number): string => {
  return (
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
    id +
    ".png"
  );
};

export default idToQualityImgUrl;
