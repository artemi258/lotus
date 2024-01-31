import { useEffect, useState } from "react";
import { getPeople, searchPeople } from "../../api/requests";
import { PeopleItem } from "./peopleItem/PeopleItem";
import { useDebounce } from "../../hooks/useDebounce";

import loadingGIF from "./loading.gif";

import "./people.css";

export const People = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [firstRender, setFirstRender] = useState(false);

  const debouncedValue = useDebounce(value);

  useEffect(() => {
    gettingPeople();
    setFirstRender(true);
  }, []);

  useEffect(() => {
    if (debouncedValue) {
      setLoading(true);
      handleSearch();
    } else if (firstRender) {
      gettingPeople();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  const gettingPeople = () => {
    setLoading(true);
    getPeople().then((res) => {
      setPeople(res.results);
      setLoading(false);
    });
  };

  const handleSearch = () => {
    searchPeople(debouncedValue).then((res) => {
      setPeople(res.results);
      setLoading(false);
    });
  };

  return (
    <div className="people">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="введите имя для поиска"
        className="input"
        type="text"
      />
      {loading ? (
        <img src={loadingGIF} alt="загрузка" className="loading" />
      ) : (
        <ul className="wrapper">
          {people.map(
            ({ name, birth_year, gender, height, mass, skin_color }) => (
              <PeopleItem
                key={name}
                name={name}
                birth_year={birth_year}
                gender={gender}
                height={height}
                mass={mass}
                skin_color={skin_color}
              />
            )
          )}
        </ul>
      )}
    </div>
  );
};
