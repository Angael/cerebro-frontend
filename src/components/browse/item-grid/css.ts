import styled from 'styled-components';

export const GridContainer = styled.section`
  display: grid;
  gap: 16px;
  grid-auto-flow: dense;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;

  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 150px;
  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 200px);
    grid-auto-rows: 200px;
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 300px);
    grid-auto-rows: 300px;
  }

  //transition: opacity 0.1s;
  //opacity: 1;
  //&.isFetching {
  //  opacity: 0.7;
  //  transition: opacity 1s;
  //}
`;
