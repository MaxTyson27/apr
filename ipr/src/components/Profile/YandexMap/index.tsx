import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import styles from '../Profile.module.sass';

interface IYandexMapProps {
  geo: {
    lat: string,
    lng: string,
  }
}

const YandexMap = ({ geo }: IYandexMapProps) => {
  const { lat, lng } = geo;

  return (
    <div className={ styles.box }>
      <h2>Местоположение базы на карте</h2>
      <YMaps>
        <Map
          state={{ center: [+lng, +lat], zoom: 5 }}
          width='800px'
          height='100%'
        >
          <Placemark geometry={[+lng, +lat]} />
        </Map>
      </YMaps>
    </div>
  )
}

export default YandexMap
