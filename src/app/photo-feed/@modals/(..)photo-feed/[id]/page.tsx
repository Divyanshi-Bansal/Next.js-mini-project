'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import wondersData from '../../../data';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/modal';

const PhotoModal = ({ params }: { params: { id: number } }) => {
  // Manage modal state manually using useState
  // const [isOpen, setIsOpen] = useState(true);
  // const [onClose, setIsClose] = useState(false);

  // const handleModalOpen = () => setIsOpen(true);
  // const handleModalClose = () => setIsOpen(false);

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
    {/* <Modal> */}
      {/* <h1>Hello world</h1> */}
    {/* </Modal> */}
      <Modal isOpen={true} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <h1>Intercepted Data Modal of Image</h1>
                <h1>{wondersData[params.id - 1].title}</h1>
              </ModalHeader>
              <ModalBody>
                <div style={{
                  display: "flex", flexDirection: "column", padding: "20px", margin: "30px",
                  alignItems: "center", justifyContent: "center", textAlign: "center"
                }}>
                  <Image src={wondersData[params.id - 1].photo} alt='image' id={params.id + ""} width={200} height={200} />
                  <div style={{ margin: "10px" }}>
                    <span>{wondersData[params.id - 1].description}</span>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <button color="danger">
                  Close
                </button>
                <button color="primary">
                  Action
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default PhotoModal;
