import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

const FullVareniki = () => {
  const { id } = useParams();
  const [vareniki, setVareniki] = React.useState();
  React.useEffect(() => {
    async function fetchVareniki() {
      try {
        const { data } = await axios.get(
          'https://652806e5931d71583df1c236.mockapi.io/items/' + id
        );
        setVareniki(data);
      } catch (error) {
        alert('Произошла ошибка, повторите запрос позже.');
      }
    }
    fetchVareniki();
  }, []);
  if (!vareniki) {
    return 'Загрузка...';
  }

  return (
    <div>
      <img src={vareniki.imageUrl} alt="" />
      <h2>{vareniki.title}</h2>
      <p>{vareniki.price}</p>
    </div>
  );
};

export default FullVareniki;
