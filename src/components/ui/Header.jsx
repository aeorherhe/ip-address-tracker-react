import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocation } from "../../services/customFetch";
import { userInput } from "../../features/locationSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { inputIpAddress } = useSelector((store) => store.location);

  return (
    <>
      <StyledHeader>
        <form
          action="/"
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(fetchLocation(e.target[0].value));
          }}
        >
          <input
            type="text"
            name="ip"
            placeholder="Search for any IP address"
            value={inputIpAddress}
            onChange={(e) => dispatch(userInput(e.target.value))}
          />
          <button type="submit" className="btn">
            <img src="/images/icon-arrow.svg" alt="" />
          </button>
        </form>
        <div className="hero"></div>
      </StyledHeader>
    </>
  );
};
export default Header;

/***************************** styled components *****************************/
/***************************** styled components *****************************/

const StyledHeader = styled.header`
  gap: 2rem;
  text-transform: uppercase;
  border-radius: var(--border-radius);
  background-color: var(--White);
  display: grid;
  z-index: 111;

  .form {
    display: grid;
    grid-template-columns: 1fr auto;
    justify-content: center;
    z-index: 1111;
  }

  input {
    padding: 1rem;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    color: var(--Dark-Grayish-Blue);
    border-radius: 0.5rem 0 0 0.5rem;

    &:focus {
      outline: none;
      border: none;
    }
  }

  .btn {
    border: none;
    outline: var(--line);
    font-size: 1rem;
    letter-spacing: 0.1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    background-color: var(--Very-Dark-Gray);
    border-radius: 0 0.5rem 0.5rem 0;
  }

  .hero {
    width: 100%;
    height: 25%;
    inset: 0;
    background-image: url("/images/pattern-bg-mobile.png");
    z-index: -11;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;

    @media (min-width: 45rem) {
      background-image: url("/images/pattern-bg-desktop.png");
    }
  }
`;
