import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./page";

test("로그인하지 않은 상태에서 추가 버튼 클릭 시 경고하는 alert가 호출되는지 확인 ", () => {
  const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
  render(<Home />);
  const addButton = screen.getByText("추가");
  fireEvent.click(addButton);

  expect(alertMock).toHaveBeenCalledWith(
    "로그인하지 않으면 추가할 수 없습니다.",
  );
  alertMock.mockRestore();
});

test("로그인 후 추가 버튼 클릭 시 count 증가되는지 확인", () => {
  render(<Home />);
  const loginButton = screen.getByText("로그인");
  fireEvent.click(loginButton);
  const addButton = screen.getByText("추가");
  fireEvent.click(addButton);
  const logoutButton = screen.getByText("로그아웃");

  expect(logoutButton).toBeInTheDocument();
  expect(screen.getByText("상품 개수: 1")).toBeInTheDocument();
});

test("상품이 0개일 때 제거 버튼 비활성화", () => {
  render(<Home />);
  const count = screen.getByText("상품 개수: 0");
  expect(count).toBeInTheDocument();
  const minusButton = screen.getByText("제거");
  expect(minusButton).toBeDisabled();
});

test("상품 추가(로그인된 상태) 후 제거 시 count 감소", () => {
  render(<Home />);
  const loginButton = screen.getByText("로그인");
  fireEvent.click(loginButton);
  const addButton = screen.getByText("추가");
  fireEvent.click(addButton);
  expect(screen.getByText("상품 개수: 1")).toBeInTheDocument();
  const minusButton = screen.getByText("제거");
  fireEvent.click(minusButton);
  expect(screen.getByText("상품 개수: 0")).toBeInTheDocument();
});
