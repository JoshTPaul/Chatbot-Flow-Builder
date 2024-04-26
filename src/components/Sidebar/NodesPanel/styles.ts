import styled from "styled-components";

export const NodesPanelWrapper = styled.div`
  padding: 0.75rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: max-content;
  gap: 0.5rem;

  svg {
    font-size: 1.5rem;
  }
`;

export const NodeCreatorWrapper = styled.div`
  padding: 1rem;
  color: var(--primary);
  border: 2px solid;
  border-radius: 0.25rem;
  cursor: grab;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  background-color: var(--neutral900);
`;
