import styles from "./styles.module.css";

type DefaultInputProps = {
  placeholder: string;
  id: string;
  labelText?: string;
} & React.ComponentProps<"input">;

export function DefaultInput({
  placeholder,
  id,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <div className={styles.field}>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input
        className={styles.inputPadrao}
        id={id}
        type="text"
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
}
