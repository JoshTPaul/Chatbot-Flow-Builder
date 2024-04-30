import styled from "styled-components";

export const MessageNodeWrapper = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 400px;
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;

  .content {
    & > .header {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem;
      background: linear-gradient(#aeeee0, #b1efe7);
    }

    & > p {
      padding: 0.75rem 0.5rem;
      min-height: 3rem;
    }
  }
`;
