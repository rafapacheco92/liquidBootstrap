import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Navbar() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Cadastro"></Tab>
      <Tab eventKey="profile" title="Login"></Tab>
    </Tabs>
  );
}

export default Navbar;
