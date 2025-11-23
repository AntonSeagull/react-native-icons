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

export const TbCurrencyRiyal = (props: IconProps) => {
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
        <Path d="M15 9v2a2 2 0 1 1-4 0v-1 1a2 2 0 1 1-4 0v-1 4a2 2 0 1 1-4 0v-2M18 12.01V12M22 10v1a5 5 0 0 1-5 5" />
      </G>
    </Svg>
  );
};