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

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    height: '450px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: 'rgb(49,151,243)',
    color: 'white',
  },
};

const Massage: FC = () => {
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
          <h2>Masaż</h2>
          {showDescription && 'Lorem ipsum bla bla bla itp itd'}
          <Button content="OPIS" onClick={() => setIsOpen(true)} />
        </Description>
      </Wrapper>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <DescriptionWrapper>
          <Title>Informacje o typie masażu</Title>
          <ParagraphWrapper>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi
            eaque deleniti ea! Libero tempora quaerat quos porro totam, debitis
            doloribus similique est maiores iure cupiditate temporibus placeat
            beatae dicta? cena: <h2>150zl/h</h2>
          </ParagraphWrapper>
          <Button content="Umów wizytę" onClick={closeModal} />
        </DescriptionWrapper>
      </Modal>
    </>
  );
};

export default Massage;
