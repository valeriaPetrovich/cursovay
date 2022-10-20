import { Pagination as AntdPadination } from 'antd';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Pagination = ({ currentPage, setCurrentPage, total }) => {
	return (
		<AntdPadination
			current={currentPage}
			onChange={setCurrentPage}
			total={total}
			className={styles.pagination}
		/>
	);
};

Pagination.propTypes = {
	currentPage: PropTypes.number,
	setCurrentPage: PropTypes.func,
	total: PropTypes.number
};

export default Pagination;


/*import React from "react";
import ReactPaginate from "react-paginate";
const Pagination = ({ info, setPageNumber }) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4 "
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName="btn btn-primary"
      previousClassName="btn btn-primary"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      onPageChange={(data) => {
        setPageNumber(data.selected+1);
      }}
      pageCount={info?.pages}
    />
  );
};

export default Pagination;
*/