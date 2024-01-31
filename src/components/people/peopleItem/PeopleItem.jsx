import "./peopleItem.css";

export const PeopleItem = ({
  name,
  birth_year,
  gender,
  height,
  mass,
  skin_color,
}) => {
  return (
    <li className="peopleItem">
      <h3 className="name">{name}</h3>
      <div className="wrap">
        <div className="characteristic">
          name: <span>{name}</span>
        </div>
        <div className="characteristic">
          birth year: <span>{birth_year}</span>
        </div>
        <div className="characteristic">
          gender: <span>{gender}</span>
        </div>
        <div className="characteristic">
          height: <span>{height}</span>
        </div>
        <div className="characteristic">
          mass: <span>{mass}</span>
        </div>
        <div className="characteristic">
          skin color: <span>{skin_color}</span>
        </div>
      </div>
    </li>
  );
};
