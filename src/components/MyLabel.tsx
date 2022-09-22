import "./MyLabel.css";

export interface MyLabelProps {
  /**
   * Este es el texto que se mostrará en la etiqueta
   */
  label: string;
  /**
   * Este es el tamaño que tendrá la etiqueta
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Capitalizar texto
   */
  allCaps: boolean;
  /**
   * Elige el color de tu etiqueta
   */
  color: "primary" | "secondary" | "tertiary";
  /**
   * Personaliza el color de tu etiqueta
   */
  fontColor: string;
}

export const MyLabel = ({
  label = "No label",
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor = "black",
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toLocaleUpperCase() : label}
    </span>
  );
};
