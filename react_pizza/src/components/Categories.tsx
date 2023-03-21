import React from 'react'

type CategoriesPropsType = {
  categoryId: number
  onChangeCategory: (idx: number) => void
}


const Categories: React.FC<CategoriesPropsType> = React.memo(({ categoryId, onChangeCategory }) => {

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  const categoriesElems = categories.map((c, i) => {
    return (
      <li
        className={categoryId === i ? 'active' : ''}
        onClick={() => onChangeCategory(i)}
        key={i}
      >
        {c}
      </li>
    )
  })

  return (
    <div className="categories">
      <ul>
        {categoriesElems}
      </ul>
    </div>
  )
})

export default Categories