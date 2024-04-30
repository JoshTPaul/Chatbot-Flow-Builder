import styled from "styled-components";
import { Toast } from "../types";

type Props = {
  variant: Toast["type"];
  animDuration: number;
};

const variantStyles: Record<Toast["type"], string> = {
  SUCCESS: `
  background-color: var(--success);
  `,
  ERROR: `
    background-color: var(--danger);
  `,
};

export const ToastWrapper = styled.div<Props>(
  ({ variant, animDuration }) => `
  position: fixed;
  top: 1.5rem;
  z-index: 1000;
  left: 50%;
  translate: -50% 0;
  padding: 1rem;
  border-radius: 10px;
  animation: float ${animDuration / 2}ms, float ${animDuration / 2}ms
    ${animDuration / 2}ms reverse forwards;

    ${variantStyles[variant]}

    @keyframes float {
      0% {
        opacity: 0;
        translate: -50% -100%;
      }
      30% {
        opacity: 1;
      }
      50% {
        translate: -50% 0;
      }
    }
`
);
