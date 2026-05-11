import { fireEvent, render, screen } from "@testing-library/react";
import { LikeButton } from ".";

test("좋아요 버튼 누르기 전에 버튼에 좋아요 표시", () => {
  render(<LikeButton />);

  const likeButton = screen.getByRole("button");
  expect(likeButton.textContent).toBe("좋아요");
  expect(likeButton).toHaveClass("bg-gray-400");
});

test("좋아요 버튼 클릭시 좋아요 취소로 텍스트 벼녁ㅇ 및 bg변경", () => {
  render(<LikeButton />);
  const likeButton = screen.getByRole("button");
  fireEvent.click(likeButton);
  expect(likeButton.textContent).toBe("좋아요 취소");
  expect(likeButton).toHaveClass("bg-red-400");
});

test("좋아요 취소", () => {
  render(<LikeButton />);
  const likeButton = screen.getByRole("button");
  fireEvent.click(likeButton);
  fireEvent.click(likeButton);
  expect(likeButton.textContent).toBe("좋아요");
  expect(likeButton).toHaveClass("bg-gray-400");
});
