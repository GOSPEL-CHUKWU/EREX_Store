import { IconContext } from 'react-icons';
import {  FaAngleRight } from 'react-icons/fa';

const Pagination = () => {
  return (
    <div className="pagination-container">
      {/* <div className="pagination-direction">
        <IconContext.Provider value={{ size: '18px' }}>
          <FaAngleLeft />
        </IconContext.Provider>
      </div> */}
      <div className="pagination active">1</div>
      <div className="pagination">2</div>
      {/* <div className="pagination">3</div>
      <div className="pagination">4</div>
      <div className="pagination">5</div> */}
      <div className="pagination-direction">
        <IconContext.Provider value={{ size: '20px' }}>
          <FaAngleRight />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Pagination;
