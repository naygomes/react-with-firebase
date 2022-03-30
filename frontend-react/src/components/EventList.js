import React from 'react';
import styles from './EventList.module.css';

export default function EventList(props) {
  return (
    <div>
      {props.events.map((e, index) => (
        // As Keys ajudam o React a identificar quais itens sofreram alterações, foram adicionados ou removidos.
        // A melhor forma de escolher uma chave é usar uma string que identifica unicamente um item da lista dentre os demais.
        // Quando você não possui nenhum ID estável para os itens renderizados, você pode usar o índice do item como chave em último recurso.
        // Não recomendamos o uso de índices para chave se a ordem dos itens pode ser alterada. Isso pode impactar de forma negativa o desempenho e poderá causar problemas com o estado do componente.
        <div className={styles.card} key={e.id}>
          <h2>{index} - {e.title}</h2>
          <p>{e.location} - {e.date}</p>
          {/* Quando precisar passar um parâmetro pra função, chame a função dessa forma */}
          <button onClick={() => props.handleClick(e.id)}>Delete event</button>
        </div>
      ))}
    </div>
  )
}
