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
  flex-flow: row wrap;
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

export const SubHeader = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const ContentRow = styled(SubHeader)``;

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
  cursor: pointer;
`;

export const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.16);
`;

export const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

// .Modal{

//     & > * {
//       &:first-child{
//         margin-top: 16px;
//       }
//       margin-left: 16px;
//       margin-right: 16px;
//     }
//     p.title{
//       font-size: 16pt;
//       font-weight: bold;
//       color: #333;
//     }
//     .content{
//       border-top: 1px solid #bebebe;
//       margin-top: 16px;
//       p{
//         padding: 8px;
//         font-size: 12pt;
//         color: #999;
//       }
//     }

//     .button-wrap{
//       margin: 0;
//       margin-top: 8px;
//       button{
//         width: 100%;
//         padding: 12px 0;
//         border-radius: 0 0 10px 10px;
//         background-color: #ad7cef;
//         font-size: 13pt;
//         color: white;
//         border: 0;
//         cursor: pointer;
//         &:hover{
//           background-color: #7f49c8;
//         }
//         &:active{
//           background-color: #7e49c8;
//         }
//       }
//     }
//   }
