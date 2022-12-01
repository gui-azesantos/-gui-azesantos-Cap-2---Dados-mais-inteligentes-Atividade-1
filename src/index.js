
const html =
  " <html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>";

// 1 - O nome das cidades avaliadas.
const ratedCities = () => {
  const cities = html.split("*");
  return `${cities[1]}, ${cities[3]}, ${cities[5]}`;
};

// 2 - O conteúdo do roteiro A de cada cidade avaliada.
const scriptA = html.split("#");
const getScriptA = () => {
  return `${scriptA[1]}
          ${scriptA[4]}
          ${scriptA[7]}`;
};

// 3 - Quantos locais são citados no roteiro A de cada cidade.
const howManyLocations = () => {
  const howManyLocationsSp = scriptA[1].split(";").length;
  const howManyLocationsLasVegas = scriptA[4].split(";").length;
  const howManyLocationsMoscow = scriptA[7].split(";").length;

  return {
    sp: howManyLocationsSp,
    vegas: howManyLocationsLasVegas,
    moscow: howManyLocationsMoscow,
  };
};

// 4 - O nome dos pontos turísticos localizados no bairro Centro da cidade de São Paulo.
const centroSP = () => {
  return scriptA[2].substring(30, 75).split(";");
};

// 5 - O nome dos pontos turísticos localizados no bairro Downtown na cidade de Los Angeles.
const downtownLasVegas = () => {
  return scriptA[5].substring(34, 99).split(";");
};

document.getElementById("rated-cities").innerHTML = ratedCities();
document.getElementById("scriptA").innerHTML = getScriptA();
document.getElementById("sp").innerHTML = howManyLocations().sp;
document.getElementById("moscow").innerHTML = howManyLocations().moscow;
document.getElementById("centro-cp").innerHTML = centroSP();
document.getElementById("downtown-vegas").innerHTML = downtownLasVegas();

console.log('teste');