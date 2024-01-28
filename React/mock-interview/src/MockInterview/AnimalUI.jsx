import "./styles.css";


export default function AnimalUI({ index, setIndex, animals }) {


  return (
    <>
      <h2
        className={`${index === 0 ? "red" : index === 1 ? "green" : "yellow"}`}
      >
        {animals[index]}
      </h2>
      <button
        onClick={() => setIndex(index > animals.length - 2 ? 0 : index + 1)}
      >
        Change Animal
      </button>
    </>
  );
}
