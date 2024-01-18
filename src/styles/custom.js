import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'row'};
  justify-content: ${(props) => props.justifyContent || 'space-between'};
  align-items: ${(props) => props.alignItems};
  background: ${(props) => props.background || ''};
  padding: ${(props) => props.padding};
  flex-wrap: ${(props) => props.flexWrap};
`;

export const ImageContainer = styled.div`
  background-image: ${(props) => `url(${props.image})`};
  background-repeat: no-repeat;
  background-size: ${(props) => props.size || 'contain'};
`;

export const GuideWrapper = styled.div`
  background: ${(props => props.show ? "transparent linear-gradient(180deg, #8C37F6 0%, #4D34F9 59%, #1431FB 100%) 0% 0% no-repeat padding-box" : '')};
  color: ${(props) => props.show ? '#ffffff' : '000000'};
  &:hover {
    color: #ffffff;
    background: transparent linear-gradient(180deg, #8C37F6 0%, #4D34F9 59%, #1431FB 100%) 0% 0% no-repeat padding-box;
  }
`;