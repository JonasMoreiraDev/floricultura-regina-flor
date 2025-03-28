import styled, { css } from "styled-components"

export const Container = styled.section`
    position: absolute;
    backdrop-filter: blur(3px);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;

    background: rgb(17,17,17);
    background: linear-gradient(90deg, rgba(13, 77, 34, 0.79) 29%, rgba(4, 58, 4, 0.7) 65%, rgba(14, 145, 14, 0.56) 93%);

    opacity: 0;
    pointer-events: none;
    transform: translateY(50px);
    transition: .5s;

    > svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
        transform: rotate(45deg);
        transition: .7s;
        cursor: pointer;
        }
        
    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;
        transition: .7s;
        transform: scale(0.7);
     }

     a {
        color: white;
        text-decoration: none;
     }

     a:hover {
        color: #004D40;
        transform: scale(1.10);
     }
          
     
    ${({ isVisible }) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0px);
        

        > svg {
            transform: rotate(0deg);
        }

        nav {
            transform: scale(1);
        }

    `}
`;

