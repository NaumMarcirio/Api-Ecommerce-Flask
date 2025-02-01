import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 1920px;
  margin-inline: auto;
  padding: 5rem 10rem;

  /* TABLET */
  @media (min-width: 768px) and (max-width: 1049px) {
    padding: 5rem 6rem;
  }

  /* MOBILE */
  @media (max-width: 767px) {
    padding: 5rem 2rem;
  }
`;
