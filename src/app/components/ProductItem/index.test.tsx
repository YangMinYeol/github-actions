import { render, screen } from "@testing-library/react";
import ProductItem from ".";

test("title과 description 입력내용확인", () => {
  render(
    <ProductItem title="임시 제목" description="임시 설명" isSoldOut={false} />,
  );

  const titleEl = screen.getByText("임시 제목");
  const descriptionEl = screen.getByText("임시 설명");

  expect(titleEl).toBeInTheDocument();
  expect(descriptionEl).toBeInTheDocument();
});

test("증가버튼과 감소버튼, 초기숫자 1이 존재하는지 확인", () => {
  render(
    <ProductItem title="임시 제목" description="임시 설명" isSoldOut={false} />,
  );

  const upBtn = screen.getByText("+");
  const minusBtn = screen.getByText("-");
  const initNum = screen.getByText(1);
  const buyBtn = screen.getByText("구매하기");

  expect(upBtn).toBeInTheDocument();
  expect(minusBtn).toBeInTheDocument();
  expect(initNum).toBeInTheDocument();
  expect(buyBtn).toBeInTheDocument();
});
test("상품이 품절상태일때", () => {
  render(
    <ProductItem title="임시 제목" description="임시 설명" isSoldOut={true} />,
  );

  const soldoutText = screen.getByText("품절");
  const buyBtn = screen.getByText("구매하기");

  expect(soldoutText).toBeInTheDocument();
  expect(buyBtn).toBeDisabled();
  // CSS 클래스에 opacity-50이 포함되어 있는지 확인
  expect(buyBtn).toHaveClass("opacity-50");

  // CSS 클래스에 cursor-not-allowed가 포함되어 있는지 확인
  expect(buyBtn).toHaveClass("cursor-not-allowed");
});
