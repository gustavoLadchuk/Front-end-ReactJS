import "./Card.css"

const Card = ({ titulo, texto, imagem }) => {

    let isActive = false;

    var cardColor = document.documentElement

    cardColor.style.setProperty('--background-color', 'white')
    cardColor.style.setProperty('--text-color', 'black')

    const handleClickCard = () => {
        if (!isActive) {
            isActive = true
            cardColor.style.setProperty('--background-color', 'blue')
            cardColor.style.setProperty('--text-color', 'white')
            return
        }
        cardColor.style.setProperty('--background-color', 'white')
        cardColor.style.setProperty('--text-color', 'black')
        isActive = false
    }

    return (
        <div class="card" onClick={handleClickCard}>
            <img src={imagem} alt="imagem" class="image" />
            <div class="text-content">
                <p class="title">{titulo}</p>
                <p class="text">{texto}</p>
            </div>
        </div>
    )
}

export default Card