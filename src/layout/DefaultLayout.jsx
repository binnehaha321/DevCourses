import PropTypes from 'prop-types';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';

const DefaultLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <LeftSidebar />
      <main>{children}</main>
      <RightSidebar />
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
