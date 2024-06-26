import styled from "styled-components";

export const SettingsPanelWrapper = styled.div`
  .header {
    display: grid;
    grid-template-columns: 1rem auto 1rem;
    gap: 1rem;
    place-items: center;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid var(--neutral700);
  }

  & > section {
    padding: 1.5rem 1rem;
    border-bottom: 1px solid var(--neutral700);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    textarea {
      resize: vertical;
    }
  }

  svg.backArrow {
    cursor: pointer;
    font-size: 0.75rem;
  }
`;
