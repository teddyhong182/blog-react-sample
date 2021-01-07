import {addNumber} from "./util";

it('add two numbers', () => {
  const result = addNumber(1, 2);
  expect(result).toBe(3);
});
// it expect 는 제스트에서 테스트 코드를 작성할때 사용되는 함수
