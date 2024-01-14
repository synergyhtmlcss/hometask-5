import './App.css';
import { Header } from './components/Header/Header';
import { Profile } from './components/Profile/Profile';
import { Sidebar } from './components/Sidebar/Sidebar';
import { PostCard } from './components/items/PostCard/PostCard';

function App() {
  // создать макет самостоятельно
  
  // сайдбар должен быть фиксированным при прокрутке, предусмотреть случай, 
  // когда все кнопки не будут помещаться в экран по высоте

  return (
    <div className="wrapper">
      <Header/>
      <div className="container">
        <Sidebar/>
        <div className="content">
          <Profile/>
          <div className="cards">
            {mockup_cards_data.map(cardData => <>
              <PostCard key={cardData.id} data={cardData}/>
            </>)}
          </div>
        </div>
      </div>
    </div>
  );
}

const mockup_cards_data = [
  {
    id: 1,
    location: "Новосибирск",
    image: "./1.png",
  },
  {
    id: 2,
    location: "Москва",
    image: "./2.png",
  },
  {
    id: 3,
    location: "Самара",
    image: "./3.png",
  },
  {
    id: 4,
    location: "Нью-Йорк",
    image: "./4.png",
  }
]

export default App;
