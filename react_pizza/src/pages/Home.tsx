import React, { useState, useEffect, useRef, useCallback } from 'react'
import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'
import Sort, { sortList } from '../components/Sort'
import qs from 'qs'

import Pagination from '../components/Pagination'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setFilters, setCategoryId } from '../redux/slices/filter/slice'
import { fetchPizzas } from '../redux/slices/pizza/asyncActions'
import { useAppDispatch } from '../redux/store'
import { selectFilter } from '../redux/slices/filter/selectors' 
import { selectPizza } from '../redux/slices/pizza/selectors'

const Home: React.FC = () => {

  const dispatch = useAppDispatch()
  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter)
  const { items, status } = useSelector(selectPizza)
  const searchRef = useRef(false)
  const isMounted = useRef(false)
  const navigate = useNavigate()



  const onChangeCategory = useCallback((id: number) => {
    dispatch(setCategoryId(id))
  }, [])
 
  const getPizzas = async () => {
    const sortBy: string = sort.sortName.replace('-', '')
    const sortOrder: string = sort.sortName.includes('-') ? 'desc' : 'asc'
    const category: string = categoryId > 0 ? `&category=${categoryId}` : ''
    const search: string = searchValue ? `&search=${searchValue}` : ''

    dispatch(
      fetchPizzas({
        sortBy,
        sortOrder,
        category,
        search,
        currentPage
      })
    )

    window.scrollTo(0, 0)

  }

  // useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1)) as unknown as FetchPizzasArgs

  //     const sort = sortList.find(obj => obj.sortName === params.sortBy)

  //     dispatch(setFilters({
  //       searchValue: params.search,
  //       categoryId: +params.category,
  //       currentPage: params.currentPage,
  //       sort: sort || sortList[0]
  //     }))
      

  //     searchRef.current = true
  //   }
  // }, [])

  useEffect(() => {
    if (!searchRef.current) {
      getPizzas()
    }

    searchRef.current = false

  }, [currentPage, searchValue, categoryId, sort])

  // useEffect(() => {
  //   if (isMounted.current) {
  //     const queryString = qs.stringify({
  //       sortName: sort.sortName,
  //       categoryId,
  //       currentPage
  //     })

  //     navigate(`?${queryString}`)
  //   }

  //   isMounted.current = true

  // }, [currentPage, categoryId, sort])

  const pizzaElems = items.map((pizza, i: number) => <PizzaBlock key={pizza.id} {...pizza} />)

  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />)

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} onChangeCategory={onChangeCategory}/>
        <Sort sort={sort}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {status === 'error' ? (
          <div>Error</div>
        ) : status === 'loading' ? (
          skeletons)
          : (
            pizzaElems
          )}
      </div>
      <Pagination />
    </div>
  )
}


export default Home