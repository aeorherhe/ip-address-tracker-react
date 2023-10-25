import { useSelector } from "react-redux";
import styled, { css } from "styled-components";

const Coordinates = () => {
  const { ipAddress, isp, location, timezone, status } = useSelector(
    (state) => state.location
  );

  return (
    <StyledCoordinates type={status}>
      <div className="address">
        <h2>ip address</h2>
        <p>{ipAddress}</p>
      </div>
      <div className="location">
        <h2>location</h2>
        <p>{location}</p>
      </div>
      <div className="timeZone">
        <h2>timezone</h2>
        <p>{timezone}</p>
      </div>
      <div className="isp">
        <h2>isp</h2>
        <p>{isp}</p>
      </div>
    </StyledCoordinates>
  );
};
export default Coordinates;

/***************************** styled components *****************************/
/***************************** styled components *****************************/

const StyledCoordinates = styled.section`
  padding: 4rem 2rem;
  display: grid;
  gap: 2rem;
  text-transform: uppercase;
  border-radius: var(--border-radius);
  background-color: var(--White);
  z-index: 111;

  > * {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  ${(props) =>
    props.type === "rejected" &&
    css`
      .address p {
        color: #eb4d35;
      }
    `}

  @media screen and (min-width: 55rem) {
    grid-template-columns: repeat(4, auto);

    > * {
      align-items: flex-start;
    }

    h2 {
      white-space: nowrap;
    }
  }
`;
