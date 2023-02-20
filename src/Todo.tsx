import React, { memo } from 'react';
import styles from './todo.module.css';

function Todo() {
  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Los Angeles battles huge wildfires.',
  ];

  return (
    <div className={styles.container}>
      <div>Front Burner</div>
    </div>
  );
}

export default memo(Todo);
