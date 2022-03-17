import { FC, useState } from 'react';
import {
  Wrapper,
  StyledImage,
  Description,
  DescriptionWrapper,
  Title,
  ParagraphWrapper,
} from './massage.styles';
import MassagePhoto from 'assets/massagePhotos/massage.jpg';
import Button from 'components/atoms/button/button';
import Modal from 'react-modal';
import { MassageProps } from './massage.types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    height: '420px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: `#C3C6CD`,
    color: 'black',
    overflow: 'scroll',
  },
};
const desktopStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    height: '400px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: `#C3C6CD`,
    color: 'black',
  },
};
const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
const Massage: FC<MassageProps> = ({ data }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Wrapper
        onMouseLeave={() =>
          window.innerWidth <= 580 ? null : setShowDescription(false)
        }
      >
        <StyledImage
          src={MassagePhoto}
          alt="asdsa"
          onMouseOver={() =>
            window.innerWidth <= 580 ? null : setShowDescription(true)
          }
          onClick={() =>
            window.innerWidth > 580 ? null : setShowDescription(true)
          }
        />
        <Description
          show={showDescription}
          onClick={() => setShowDescription(false)}
        >
          <h2>{data.title}</h2>
          {showDescription && data.description}
          <Button content="OPIS" onClick={() => setIsOpen(true)} />
        </Description>
      </Wrapper>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={window.innerWidth < 400 ? customStyles : desktopStyles}
      >
        <DescriptionWrapper>
          <Title>{data.title}</Title>
          <ParagraphWrapper>
            {data.description}
            <h3>Cena usługi 100zł/h</h3>
            <h5>*Kolejne usługi 120zł/h</h5>
          </ParagraphWrapper>
          <StyledLink to={'/contact'}>
            <Button content="Napisz / zadzwoń" onClick={closeModal} />
          </StyledLink>
        </DescriptionWrapper>
      </Modal>
    </>
  );
};

export default Massage;
