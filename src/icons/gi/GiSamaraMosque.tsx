import {
  G,
  Path,
  Svg,
  Line,
  Circle,
  Polyline,
  Polygon,
  Rect,
  Ellipse
} from 'react-native-svg';
import type { IconProps } from '../../types';

export const GiSamaraMosque = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m269 54.7-28 4.87v34.12l28-5.7zm16.5 48.3L225 115.4v33.1l60.5-15.1zm25.5 42.5L201 173v31.1l110-18.4zm32 53.1-174 29v46.2l174-21.7zm32 67.6-238 29.7v59l238-23.8zm32 79.7-302 30.2V439h302zM41 457v30h78v-30zm96 0v30h110v-30zm128 0v30h110v-30zm128 0v30h78v-30z" />
      </G>
    </Svg>
  );
};