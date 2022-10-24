import { Pagination as AntdPadination } from 'antd';
import PropTypes from 'prop-types';

const Pagination = ({ currentPage, setCurrentPage, total }) => {
	return (
		<AntdPadination
			current={currentPage}
			onChange={setCurrentPage}
			total={total}
		/>
	);
};

Pagination.propTypes = {
	currentPage: PropTypes.number,
	setCurrentPage: PropTypes.func,
	total: PropTypes.number
};

export default Pagination;