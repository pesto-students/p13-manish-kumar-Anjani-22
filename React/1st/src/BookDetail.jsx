import { useEffect } from "react";

export default function BookDetail({ book }) {
  useEffect(() => {
    console.log("mount");
    return () => {
      console.log(`unmount `);
    };
  }, []);
  return (
    <div id={book.title}>
      <h3>{book.author}</h3>
      <h4>{book.year}</h4>
    </div>
  );
}
