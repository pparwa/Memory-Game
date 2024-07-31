import './CardContainer.css'
import Card from './Utils/Card'
function CardContainer({ Cards, handelChoice , choiceone , choicetwo}) {
  Cards.forEach(element => {
    if(element == choiceone){
      console.log('ok')
    }
  });


  return (
    <div className="grid-container">
      {Cards && Cards.map((card) =><Card key={card.id} src={card.src} handelChoice={handelChoice} card={card} fliped={(card ==  choiceone ||card == choicetwo ||  card.match) ? true : false}/>)}
    </div>
  );
}

export default CardContainer