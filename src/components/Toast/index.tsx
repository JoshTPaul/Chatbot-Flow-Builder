import { useEffect, useState } from "react";
import { useFlowBuilder } from "../../useFlowBuilder";
import { ToastWrapper } from "./styles";

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
