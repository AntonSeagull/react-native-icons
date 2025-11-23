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

export const TbCurrencyBahraini = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M3 10v1a4 4 0 0 0 4 4h2a2 2 0 0 0 2-2v-3M7 19.01V19M14 15.01V15M17 15h2a2 2 0 0 0 1.649-3.131L17.996 8" />
      </G>
    </Svg>
  );
};