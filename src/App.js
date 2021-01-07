/* eslint-disable */
import {useState} from "react";
import logo from './logo.svg';
import './App.css';
import TodoList from "./TodoList";
import {Todo} from "./Todo";
import './test.css';

function App() {
  console.log(`NODE_ENV = ${process.env.NODE_ENV}`);
  console.log(`REACT_APP_DATA_API = ${process.env.REACT_APP_DATA_API}`);
  console.log(`REACT_APP_LOGIN_API = ${process.env.REACT_APP_LOGIN_API}`);

  let [글제목, 글제목변경] = useState(['남자 코드 추천', '강남 우동 맛집', '선릉 국밥 맛집']);

  let [따봉, 따봉변경] = useState(0);
  let posts = '강남 고기 맛집';

  function 제목바꾸기() {
    // 수정할 데이터를 만든다.
    // 이건 값 공유
    // var newArray = 글제목;
    // deep copy
    var newArray = [...글제목];
    newArray[0] = '여자 코드 추천'
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={제목바꾸기}>버튼</button>
      <div className='list'>
        <h3>{글제목[0]} <span onClick={() => {
          따봉변경(따봉 + 1)
        }}>👍</span> {따봉} </h3>
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

      <Modal />

      <hr />
      <div className="App">
        <TodoList />
      </div>
    </div>
  );
}

// component name 은 대문자
function Modal() {
  return (
    <>
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      <div></div>
    </>
  );
}

export default App;

// 어떤걸 Component로 만들까?
  // 반복 출현하는 HTML 덩어리들
  // 자주 변경되는 HTML UI들
  // 다른 페이지 만들 때도 컴포넌트로 만듬
// 단점
// state 쓸 때 복잡해짐

