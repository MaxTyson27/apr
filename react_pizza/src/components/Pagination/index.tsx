import React from 'react'
import cn from './Pagination.module.scss'
import ReactPaginate from 'react-paginate';
import { setCurrentPage } from '../../redux/slices/filter/slice';
import { useDispatch } from 'react-redux';

const Pagination: React.FC = () => {
  const dispatch = useDispatch()
  return (
    <ReactPaginate
      className={cn.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={({ selected }) => dispatch(setCurrentPage(selected))}
      pageRangeDisplayed={8}
      pageCount={3}
      previousLabel="<"
    />
  )
}

export default Pagination
