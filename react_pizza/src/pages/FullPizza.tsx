import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const FullPizza: React.FC = () => {

  const [data, setData] = useState<{
    imageUrl: string
    title: string
    price: number
  }>()
  const navigate = useNavigate()
  const { id } = useParams()


  React.useEffect(() => {


    const getPizza = async () => {
      try {
        const { data } = await axios.get('https://63d91b485a330a6ae174b73e.mockapi.io/items/' + id)

        setData(data)

      } catch (err: any) {
        alert('error: ')
        navigate('/')
      }
    }

    getPizza()
  }, [])

  if (!data) {
    return <>Зягрузка...</>
  }

  return (
    <div className='container'>
      <img src={data.imageUrl} alt="" />
      <h2>{data.title}</h2>
      <h4>{data.price} руб.</h4>
    </div>
  )
}

export default FullPizza
