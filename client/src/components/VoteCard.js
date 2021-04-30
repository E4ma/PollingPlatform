import styled from 'styled-components'


const sc = styled;

const CardWrapper = sc.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  border-radius: 5px;
`;

const CardHeader = sc.header`
  padding-top: 32px;
  padding-bottom: 32px;
`;

const CardHeading = sc.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const CardBody = sc.div`
  padding-right: 32px;
  padding-left: 32px;
`;

const CardFieldset = sc.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`;

const CardImage = sc.div`
position: relative;
padding: 0;
margin: 0;
border: 0;
height: 10rem;
`;

const CardButton = sc.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #e5195f;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, .08);
  cursor: pointer;
  transition: all .25s cubic-bezier(.02, .01, .47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, .16);
    transform: translate(0, -5px);
  }
`;

function VoteCard() {



    return(
        <CardWrapper>
            <CardHeader>
                <CardHeading>
                    Item Name
                </CardHeading>
            </CardHeader>

            <CardBody>
                <CardImage />
                <CardFieldset>
                    <CardButton>
                        Update
                    </CardButton>
                </CardFieldset>
            </CardBody>

        </CardWrapper>
    );
    
};

export default VoteCard;