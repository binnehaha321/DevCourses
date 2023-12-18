import PropTypes from 'prop-types';
import Sidebar from '../components/Sidebar';

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <>
        <Sidebar />
        <main>{children}</main>
      </>
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
