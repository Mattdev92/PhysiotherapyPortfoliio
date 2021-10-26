import { FC, useState } from 'react';
import { Wrapper, StyledImage, Description } from './massage.styles';
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
        <h1>Informacje o typie masażu</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi
          eaque deleniti ea! Libero tempora quaerat quos porro totam, debitis
          doloribus similique est maiores iure cupiditate temporibus placeat
          beatae dicta? cena: <h2>150zl/h</h2>
        </p>
        <button onClick={closeModal}>Przeczytałem ! </button>
      </Modal>
    </>
  );
};

export default Massage;
