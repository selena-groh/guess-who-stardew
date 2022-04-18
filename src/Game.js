import { useEffect, useState } from "react";
import "./Game.scss";
import PersonCard from "./PersonCard";
import Button from "./Button";
import { initialPeopleData } from "./PeopleData";
import { POSSIBLE, ELIMINATED, generateRandomFromArray } from "./utils";

const Game = () => {
  const [chosenPerson, setChosenPerson] = useState(null);
  const [board, setBoard] = useState(initialPeopleData);

  // Runs once on initial page load to determine the letter options
  useEffect(() => {
    setChosenPerson(generateRandomFromArray(initialPeopleData));
  }, []);

  const toggleStatus = (personToEliminate) =>
    setBoard(
      board.map((person) =>
        person.name === personToEliminate.name
          ? {
              ...person,
              status: person.status === POSSIBLE ? ELIMINATED : POSSIBLE
            }
          : { ...person }
      )
    );

  return (
    <div className="Game">
      <div className="Game-sidebar">
        <h2>Your Person</h2>
        <PersonCard person={chosenPerson} />
        <div className="Game-actions">
          <Button
            onClick={() =>
              setChosenPerson(generateRandomFromArray(initialPeopleData))
            }
          >
            Randomize Person
          </Button>
          <Button onClick={() => setBoard(initialPeopleData)}>Clear</Button>
        </div>
      </div>
      <div className="Game-board">
        {board.map((person, index) => (
          <PersonCard
            key={`${person}-${index}`}
            person={person}
            onClick={() => toggleStatus(person)}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
