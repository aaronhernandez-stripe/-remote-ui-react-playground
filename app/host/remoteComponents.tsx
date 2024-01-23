import { ReactNode } from "react";

export type ButtonProps = {
  onPress: () => void;
  children?: ReactNode;
};
export const Button = ({ onPress, children }: ButtonProps) => (
  <button className="Button" onClick={() => onPress()} type="button">
    {children}
  </button>
);

export type BoxProps = {
  withBorder?: boolean;
  children?: ReactNode;
};

export const Box = ({ withBorder, children }: BoxProps) => {
  return (
    <div style={{ border: withBorder ? "2px solid white" : undefined }}>
      {children}
    </div>
  );
};

export type NoPropsProps = {};
export const NoProps = () => {
  return <div>No props</div>;
};

export type TextFieldProps = {
  label: ReactNode;
};
export const TextField = ({ label }: TextFieldProps) => {
  return (
    <div>
      <label>{label}</label>
      <input placeholder="random input" />
    </div>
  );
};
