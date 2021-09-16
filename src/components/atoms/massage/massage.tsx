import { FC, useState } from 'react';
import {
  Wrapper,
  StyledImage,
  CoverWrapper,
  Description,
} from './massage.styles';
import MassagePhoto from 'assets/massagePhotos/massage.jpg';
import Button from 'components/atoms/button/button';
import Modal from 'react-modal';
import { ModalWrapper } from './massage.styles';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    height: '400px',
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
      <Wrapper onMouseLeave={() => setShowDescription(false)}>
        <StyledImage src={MassagePhoto} alt="asdsa" />
        <CoverWrapper
          onMouseOver={() => setShowDescription(true)}
          onClick={() => setShowDescription(true)}
        />
        <Description show={showDescription}>
          <h2>Masaż</h2>
          {showDescription && 'Lorem ipsum bla bla bla itp itd'}
          <Button content="OPIS" onClick={() => setIsOpen(true)} />
        </Description>
      </Wrapper>
      <ModalWrapper>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          style={customStyles}
        >
          <h1>Informacje o typie masażu</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi
            eaque deleniti ea! Libero tempora quaerat quos porro totam, debitis
            doloribus similique est maiores iure cupiditate temporibus placeat
            beatae dicta?
          </p>
          <button onClick={closeModal}>Przeczytałem ! </button>
        </Modal>
      </ModalWrapper>
    </>
  );
};

export default Massage;
