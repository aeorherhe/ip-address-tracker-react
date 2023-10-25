import styled from "styled-components";
import { Coordinates, Map, Header } from "./components/ui";

function App() {
  return (
    <StyledApp>
      <div className="details">
        <h1>IP address tracker</h1>
        <Header />
        <Coordinates />
      </div>
      <Map />
    </StyledApp>
  );
}

export default App;

/**************************** styled components *******************************/
/**************************** styled components *******************************/

const StyledApp = styled.main`
  padding: 2rem;
  display: grid;
  gap: 2rem;
  border-radius: var(--border-radius);
  width: 95vw;
  margin: 0 auto;

  .details {
    width: 99%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 35rem;

    > h1 {
      color: var(--White);
    }
  }

  @media screen and (min-width: 45rem) {
    .details {
      max-width: 50rem;
    }
  }
`;
