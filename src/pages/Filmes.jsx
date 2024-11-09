import { useState, useEffect } from 'react';
import { Banner } from '../components/Banner';
import List from '../components/List';

export function Filmes() {
  const [tipo, setTipo] = useState('');

  useEffect(() => {
    console.log('Troca tipo: ', tipo);
  });

  return (
    <>
      <Banner
        titulo="Filmes"
        descricao="Confira as maiores produções do cinema mundial"
        categoria="filmes"
      />
      <button onClick={() => setTipo('popular')}>Popular</button> |
      <button onClick={() => setTipo('now_playing')}>Em cartaz</button>
      <h5>{tipo}</h5>
      <List categoria="Filmes" tipo="now_playing" />
      {console.log({ tipo })}
    </>
  );
}
