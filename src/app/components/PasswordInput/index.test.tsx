import { render, screen } from "@testing-library/react";
import { PasswordInput } from ".";

test("초기 상태에서 비밀번호가 숨겨져 있고(type='password'), '보기' 버튼이 보이는지 확인한다.", () => {
  render(<PasswordInput />);
  const button = screen.getByRole("button");
  expect(button.textContent).toBe("보기");
});
