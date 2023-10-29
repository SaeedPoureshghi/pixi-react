import styles from './card.module.css';

/* eslint-disable-next-line */
export interface CardProps {
  title?:string
}

export function Card(props: CardProps) {
  return (
    <div className={styles['container']}>
      <h1>{props.title ?? ''}</h1>
    </div>
  );
}

export default Card;
