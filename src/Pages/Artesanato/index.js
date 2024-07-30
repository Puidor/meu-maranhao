export default function Artesanato() {
  return (
    <>
      <main class="main-content">
        <section id="portfolio">
          <div class="portfolio__title">
            <h1>Artesanato Maranhense</h1>
            <h4>Admire as criações artesanais que valorizam a tradição e a identidade maranhense</h4>
          </div>

          <div class="portfolio__cards">
            <div class="portfolio__cards__item">
              <img src="./assets/babacu.jpg" alt="Babaçu" />
              <div class="portfolio__cards__item_description">
                <h3>Babaçu</h3>
                <p>
                  O cofo, a esteira, também conhecida como mensaba, e o abano, para fogo ou para juntar cisco nos quintais e terreiros, são os
                  produtos da palha de babaçu mais frequentes de se encontrar. Todos eles possuem seus segredos de execução e nota-se a diferença
                  quando tecidos por especialistas.
                </p>
                <a href="https://www.ihu.unisinos.br/categorias/188-noticias-2018/575687-quebradeiras-de-coco-babacu" target="_blank">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i> Saiba mais
                </a>
              </div>
            </div>
            <div class="portfolio__cards__item">
              <img src="./assets/arte-bumba.webp" alt="Artes do Bumba Meu Boi" />
              <div class="portfolio__cards__item_description">
                <h3>Artes do Bumba Meu Boi</h3>
                <p>
                  O Bumba Meu Boi tem um forte vínculo com o artesanato. Demanda muitas habilidades e conhecimentos para a produção do boi, das
                  indumentárias, dos chapéus, dos adereços para os diversos personagens, além dos instrumentos musicais. Bordado, entalhe, diferentes
                  tipos de montagem, costura e ornamentação são as técnicas mais presentes, que mobilizam centenas de artesãos.
                </p>
                <a href="https://artesanatodomaranhao.com.br/destaques/73516/artes-do-bumba-meu-boi" target="_blank">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i> Saiba mais
                </a>
              </div>
            </div>
            <div class="portfolio__cards__item">
              <img src="./assets/vassouras.webp" alt="Vassouras" />
              <div class="portfolio__cards__item_description">
                <h3>Vassouras</h3>
                <p>
                  Implemento utilizado cotidianamente para varrer, escovar ou esfregar áreas internas e externas, as vassouras, espanadores e
                  vasculhadores ou vasculhantes (de cabo comprido, usados para varrer teto ou telhas) destacam-se na produção artesanal do Maranhão
                  por serem produzidas na maioria das cidades (mais precisamente em 80% delas), pela diversidade de materiais utilizados e também pela
                  estética, muitas delas recebem pequenos detalhes que tornam bonitos esses objetos tão corriqueiros e mostram capricho dos artesãos.
                </p>
                <a href="https://artesanatodomaranhao.com.br/destaques/73515/vassouras" target="_blank">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i> Saiba mais
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
