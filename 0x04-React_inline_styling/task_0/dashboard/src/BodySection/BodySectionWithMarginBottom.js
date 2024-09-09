import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  component: {
    margin: '20px',
  },
});

const Component = () => {
  return (
    <div className={css(styles.component)}>
      <h1>Hello</h1>
      <p>This component.</p>
    </div>
  );
};

export default Component;
