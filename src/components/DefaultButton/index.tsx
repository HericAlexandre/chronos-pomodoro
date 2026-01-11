import styles from "./styles.module.css";

type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: "green" | "red";
} & React.ComponentProps<"button">;

export function DefaultButton({
  color = "green",
  ...props
}: DefaultButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[color]}`}
      type="button"
      {...props}
    >
      {props.icon}
    </button>
  );
}
