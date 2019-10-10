import styled, { css, createGlobalStyle } from 'styled-components';

export const BoardWrapper = styled.div`
  background-color: #3179ba;
  overflow-y: hidden;
  padding: 5px;
  color: #393939;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 100vh;
`;

export const Header = styled.header`
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const LaneFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  height: 10px;
`;

export const CardHeader = styled.div`
  border-bottom: 1px solid #eee;
  padding-bottom: 6px;
  color: #000;
`;

export const StyledSemesterHeader = styled(Header)`
  margin-bottom: 0px;
  ${props =>
    props.editLaneTitle &&
    css`
      padding: 0px;
      line-height: 30px;
    `}
  ${props =>
    !props.editLaneTitle &&
    css`
      padding: 0px 5px;
    `}
`;

export const StyledSemesterTitle = styled.div`
  font-size: 14px;
`;

export const StyledSemesterWrapper = styled.div`
  border-radius: 3px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  position: relative;
  padding: 10px;
  cursor: pointer;
  max-width: 250px;
  margin-bottom: 7px;
  min-width: 230px;
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  cursor: ${props => (props.draggable ? 'grab' : `auto`)};
  width: 60%;
  margin-bottom: 10px;
`;

export const RightContent = styled.span`
  width: 40%;
  text-align: right;
  padding-right: 10px;
  font-size: 13px;
`;

export const StyledSemesterFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  height: 10px;
`;

export const StyledSubjectWrapper = styled.article`
  border-radius: 3px;
  border-bottom: 1px solid #ccc;
  background-color: #f0f0f0;
  position: relative;
  padding: 10px;
  cursor: pointer;
  max-width: 250px;
  margin-bottom: 7px;
  min-width: 230px;
`;

export const StyledSubjectHeader = styled(Header)`
  border-bottom: 1px solid #fff;
  padding-bottom: 6px;
  color: #000;
`;

export const StyledSubjectTitle = styled(Title)`
  font-size: 14px;
`;

export const StyledSubjectRightContent = styled(RightContent)`
  font-size: 10px;
`;

export const SubContent = styled.span`
  font-size: 12px;
`;

export const SubHeader = styled.header`
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const CenterContent = styled.span`
  width: 50%;
  text-align: right;
  padding-right: 10px;
  font-size: 13px;
`;

export const Detail = styled.div`
  font-size: 12px;
  color: #4d4d4d;
  white-space: pre-wrap;
`;

export const StyledSubjectFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  height: 10px;
`;
