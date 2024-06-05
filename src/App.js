import './App.css';
import Card from './components/Card';
import Timer from './components/Timer';

function App() {



  return (
    <div>
      <div class="head">
        <h1 class="logo">Blue Apron</h1>
        <h1 class="slogan-first-line">A great meal</h1>
        <h1 class="slogan-second-line">changes everything</h1>
        <div class="head-description">
          Choose from 80+ weekly meals with high-
          quality ingredients and options for every
          lifestyle, including vegetarian, carb-conscious,
          Heat & Eat, and more.
        </div>
        <button class="plans-button">view plans</button>
      </div>

      <div class="main">
        <h1 class="main-title">Get started for a little as</h1>
        <h2 class="main-subtitle"> $7.99 per serving</h2>
        <div class="main-description">
          With high-quality ingredients packed into every box, these delicious recipes deliver on value.
          If you do the math, making these recipes is cheaper with us than doing it on your own.</div>
        <button class="plans-button">view plans</button>
        <div class="vantages-section">
          <div class="vantage">
            <img src="https://v.fastcdn.co/t/d1da2199/1ee49353/1707909812-59831030-88x108x88x108x2x2-Icon-RecipeCards-01-.jpg"
              alt="Cardápio" class="vantage-image" />
            <div class="vantage-description"><b>A variety of delicious dishes. </b>
              Choose from our rotating menus of chef-inspired recipes.</div>
          </div>
          <div class="vantage">
            <img src="https://v.fastcdn.co/u/d1da2199/53676862-0-Icon-Variety.svg" alt="Pratos de comida" class="vantage-image" />
            <div class="vantage-description"><b>Flexible options. </b>
              Change how many recipes and servings you need each week.</div>
          </div>
          <div class="vantage">
            <img src="https://v.fastcdn.co/u/d1da2199/53700450-0-Icon-Skip-Delivery.svg" alt="Janela de aplicativo" class="vantage-image" />
            <div class="vantage-description"><b>No commitment needed. </b>
              Skip or cancel anytime.</div>
          </div>
        </div>
      </div>

      {/* TDE  04*/}
      <div class="cards">
        <Card titulo="Jinx" texto="Um gato com olhos grandes"
          imagem="https://i1.sndcdn.com/artworks-88qoaq5SJosdzYZO-6j9tGQ-t500x500.jpg" />

        <Card titulo="Big Floppa" texto="Um caracal domesticado"
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0U8QNPMQe9328hbMn_mQogPUATpV01LmsvA&s" />

        <Card titulo="Maxwell" texto="Gato preto e branco"
          imagem="https://i1.sndcdn.com/artworks-oGvaMt0dsBWPL7WZ-qgbAMA-t500x500.jpg" />
      </div>

      {/* TDE  06*/}
      <Timer />

      <footer>
        <div class="footer">
          <p class="slogan-footer">Cook along with us</p>
          <h1 class="logo-footer">Blue Apron</h1>
        </div>
      </footer>

    </div>
  );
}

export default App;
