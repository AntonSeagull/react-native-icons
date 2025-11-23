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

export const FaRockrms = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 496 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 248, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8m157.4 419.5h-90l-112-131.3c-17.9-20.4-3.9-56.1 26.6-56.1h75.3l-84.6-99.3-84.3 98.9h-90L193.5 67.2c14.4-18.4 41.3-17.3 54.5 0l157.7 185.1c19 22.8 2 57.2-27.6 56.1-.6 0-74.2.2-74.2.2z" />
      </G>
    </Svg>
  );
};