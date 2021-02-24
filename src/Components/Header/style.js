import styled from "styled-components";

export const HeaderContent = styled.header`
  width: 100%;
  height: 60px;
  background-color: #fff;

  border-bottom: 4px solid #75dab4;

  .container {
    height: 100%;
    display: flex;
    align-items: center;

    .logo {
      flex: 1;
      font-weight: 700;
    }

    nav {
      ul {
        width: 150px;
        display: flex;
        justify-content: space-between;

        li {
          cursor: pointer;
          transition: all 0.2s;
          &:hover {
            color: #75dab4;
          }
        }
      }
    }
  }
`;
