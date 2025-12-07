"use client";

export default function FilterError({ error }) {
  return (
    <div id="error">
      <h2>오류가 발생했습니다.</h2>
      <p>{error.message}</p>
    </div>
  );
}
