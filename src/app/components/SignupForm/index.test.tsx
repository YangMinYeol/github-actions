import SignupForm from ".";
import { render, screen } from "@testing-library/react";

test("이메일, 비밀번호, 비밀번호 확인 입력필드 렌더링 확인", () => {
  render(<SignupForm />);
  const emailInput = screen.getByLabelText("이메일");
  const passwordInput = screen.getByLabelText("비밀번호");
  const passwordConfirmInput = screen.getByLabelText("비밀번호 확인");
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(passwordConfirmInput).toBeInTheDocument();
});

test("비밀번호, 비밀번호 확인 입력 필드 렌더링 확인", () => {
  render(<SignupForm />);
  const password = screen.getByPlaceholderText("비밀번호");
  const passwordConfirm = screen.getByPlaceholderText("비밀번호 확인");
  expect(password).toHaveProperty("type", "password");
  expect(passwordConfirm).toHaveProperty("type", "password");
});

test("회원가입 버튼 렌더링 확인", () => {
  render(<SignupForm />);
  const button = screen.getByRole("button", { name: "회원가입" });
  expect(button).toBeInTheDocument();
});
