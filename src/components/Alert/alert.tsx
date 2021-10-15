import React, { useState } from "react";

export type AlertType = "default" | "success" | "danger" | "warning";

export interface AlertProps {
  title: string;
  description?: string;
  type?: AlertType;
  onClose?: () => void;
  closable?: boolean;
}

const Alert = (props: AlertProps) => {
  const [hide, setHide] = useState(false);
  return <div></div>;
};
