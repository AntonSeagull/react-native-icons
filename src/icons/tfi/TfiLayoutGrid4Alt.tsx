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

export const TfiLayoutGrid4Alt = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M1 1h3v3H1zm4 3h3V1H5zm4 0h3V1H9zm4-3v3h3V1zM1 8h3V5H1zm4 0h3V5H5zm4 0h3V5H9zm4 0h3V5h-3zM1 12h3V9H1zm4 0h3V9H5zm4 0h3V9H9zm4 0h3V9h-3zM1 16h3v-3H1zm4 0h3v-3H5zm4 0h3v-3H9zm4 0h3v-3h-3z" />
      </G>
    </Svg>
  );
};