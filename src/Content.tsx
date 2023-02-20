import React, { memo } from 'react';
import styles from './content.module.css';
import Todo from './Todo';

function Content() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <Todo />
      </div>
      <div>Back Burner</div>
      <div>Notes</div>
      <div>Misc Task</div>
    </div>
  );
}

export default memo(Content);
