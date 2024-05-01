import { useEffect, useState } from "react";
import { useFlowBuilder } from "../../hooks/useFlowBuilder";
import { ToastWrapper } from "./styles";

/*
  INFO: A generalized toast component.
  Can be customized further to show different types of toast messages,
  based on the type prop.
*/

function Toast() {
  const { toast } = useFlowBuilder();
  const [showToast, setShowToast] = useState<boolean>(false);

  const ANIM_DURATION_OFFSET = 500;
  const timeoutDuration = (toast?.duration || 2000) + ANIM_DURATION_OFFSET;

  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined;

    if (toast) {
      setShowToast(true);
      timeoutId = setTimeout(() => {
        setShowToast(false);
      }, timeoutDuration);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [toast]);

  if (!showToast || !toast) return <></>;
  return (
    <ToastWrapper variant={toast.type} animDuration={timeoutDuration}>
      {toast.message}
    </ToastWrapper>
  );
}

export default Toast;
