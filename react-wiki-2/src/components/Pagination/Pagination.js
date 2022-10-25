import { Pagination as AntdPadination } from 'antd';
import styles from './styles.module.scss'

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

export default Pagination;