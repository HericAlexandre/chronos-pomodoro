import React from 'react';
import styles from './styles.module.css';

type DefaultInputProps = {
  placeholder: string;
  id: string;
  labelText?: string;
} & React.ComponentProps<'input'>;

export const DefaultInput = React.forwardRef<
  HTMLInputElement,
  DefaultInputProps
>(function DefaultInput({ placeholder, id, labelText, ...rest }, ref) {
  return (
    <div className={styles.field}>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input
        ref={ref}
        className={styles.inputPadrao}
        id={id}
        type='text'
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
});

DefaultInput.displayName = 'DefaultInput';
