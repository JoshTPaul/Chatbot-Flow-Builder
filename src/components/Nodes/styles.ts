import styled from "styled-components";

type Props = {
  selected: boolean;
};

export const MessageNodeWrapper = styled.div<Props>(
  ({ selected }) => `
box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
width: 400px;
border-radius: 0.5rem;
overflow: hidden;
cursor: pointer;
--hPad: 1rem;
background-color: var(--neutral900);

${selected ? `outline: 2px solid var(--primary);` : ""}

.content {
  & > .header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem var(--hPad);
    background: linear-gradient(#aeeee0, #b1efe7);
  }

  & > p {
    padding: 0.75rem var(--hPad);
    min-height: 3rem;
  }
}

.whatsappIcon {
  margin-left: auto;
  padding: 0.25rem;
  font-size: 1.25rem;
  background-color: var(--neutral800);
  border-radius: 100%;
}
`
);
