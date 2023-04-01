import './App.css';
import { Screen1 } from './components/Screen1';
import { Screen2 } from './components/Screen2';
import { Button, Modal } from 'antd';
import { useState } from 'react';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal1 = () => {
    setIsModalOpen1(true);
  };
  const handleOk1 = () => {
    setIsModalOpen1(false);
  };
  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };

  return (
    <div className="App">
      <>
        <Button type="primary" onClick={showModal}>
          Screen 1
        </Button>
        <Modal
          width={1000}
          title="Table 1 With Pagination" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Screen1 />
        </Modal>
      </>

      <>
        <Button type="primary" onClick={showModal1}>
          Screen 2
        </Button>
        <Modal
          width={1000}
          title="Table 2 With Sorting" open={isModalOpen1} onOk={handleOk1} onCancel={handleCancel1}>
          <Screen2 />
        </Modal>
      </>
    </div>
  );
}

export default App;
