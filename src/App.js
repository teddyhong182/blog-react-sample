import {useState} from "react";
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코드 추천', '강남 우동 맛집', '선릉 국밥 맛집']);

  let posts = '강남 고기 맛집';

  function 함수() {
    return 100;
  }

  // let style = { color : 'blue', fontSize : '30px' };

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className='list'>
        <h3>{글제목[0]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3>{글제목[1]}</h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3>{글제목[2]}</h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
