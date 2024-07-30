export default function Culinaria() {
  return (
    <>
      <main class="main-content">
        <section id="portfolio">
          <div class="portfolio__title">
            <h1>Culinária Maranhense</h1>
            <h4>Delicie-se com os sabores únicos e tradicionais do Maranhão</h4>
          </div>

          <div class="portfolio__cards">
            <div class="portfolio__cards__item">
              <img src="./assets/arroz-cuxa.webp" alt="Arroz de cuxá" />
              <div class="portfolio__cards__item_description">
                <h3>Arroz de cuxá</h3>
                <p>
                  Provavelmente o prato mais tradicional da culinária maranhense, o arroz de cuxá é feito com a vinagreira. Tradicionalmente servido
                  como acompanhamento para frutos-do-mar, peixes fritos e ensopados, esse arroz demanda maestria em seu preparo, porque a vinagreira é
                  uma erva ácida e amarga, o que dificulta seu preparo e exige um controle de proporções para que o arroz não fique com um gosto ruim.
                  Mas quando bem feito, é uma experiência única para o seu paladar!
                </p>
                <a href="https://www.tudogostoso.com.br/receita/9547-arroz-de-cuxa-maranhense.html" target="_blank">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i> Saiba mais
                </a>
              </div>
            </div>
            <div class="portfolio__cards__item">
              <img src="./assets/peixada.jpg" alt="Peixada Maranhense" />
              <div class="portfolio__cards__item_description">
                <h3>Peixada Maranhense</h3>
                <p>
                  Parecida com uma moqueca, a peixada maranhense é um cozido bem temperado de peixe, normalmente feita de pescada, mas também pode ser
                  feita com outros peixes parecidos. Seu diferencial é o ovo cozido que vai junto. Um prato único e típico da região, que vai bem até
                  em dias de calor.
                </p>
                <a href="https://www.tudogostoso.com.br/receita/298508-peixada-maranhense.html" target="_blank">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i> Saiba mais
                </a>
              </div>
            </div>
            <div class="portfolio__cards__item">
              <img src="./assets/jucara.jpg" alt="Juçara" />
              <div class="portfolio__cards__item_description">
                <h3>Juçara</h3>
                <p>
                  O juçara é o açaí do Maranhão. As frutas, que são da mesma família, são diferentes entre si, mas são consumidas de maneira
                  semelhante. Apesar de ser consumida com granola e banana por algumas pessoas, a maneira preferida de consumo dos maranhenses é com
                  camarão seco e farinha d’água, podendo ser consumida até com carne de sol.
                </p>
                <a
                  href="https://g1.globo.com/ma/maranhao/noticia/2022/07/30/jucara-do-maranhao-iguaria-tipica-pode-ser-consumida-com-farinha-e-ate-camarao.ghtml"
                  target="_blank"
                >
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
