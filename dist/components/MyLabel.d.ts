/// <reference types="react" />
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
    /**
     * Personaliza el fondo de tu etiqueta
     */
    backgroundColor: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
