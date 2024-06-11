import React from 'react';
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./index.module.css";

const UnderConstruction = () => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faPersonDigging} size="3x" />
      <h2>Page under construction</h2>
    </div>
  );
};

export default UnderConstruction;