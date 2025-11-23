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

export const GiArtificialHive = (props: IconProps) => {
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
        <Path d="M251.313 23.844 49.438 140.25l-.376 233.5 202.625 116.406L453.563 373.75l.375-233.5zm-1.407 57.062 52.406 30.25v60.5l-52.406 30.25-52.406-30.25v-60.5zm-105.344 60.47 52.407 30.25v60.5l-52.407 30.25 52.406 30.25v60.53l-52.407 30.25-52.407-30.25v-60.53l52.406-30.25-52.406-30.25v-60.5l52.406-30.25zm210.313 0 52.406 30.25v60.5l-52.405 30.25 52.406 30.25v60.53l-52.405 30.25-52.406-30.25v-60.53l52.405-30.25-52.406-30.25v-60.5zM249.905 202l52.407 30.25v60.5l-52.28 30.188 52.28 30.156v60.53l-52.406 30.25-52.406-30.25v-60.53l52.28-30.156-52.28-30.188v-60.5L249.906 202z" />
      </G>
    </Svg>
  );
};