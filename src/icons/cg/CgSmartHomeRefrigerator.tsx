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

export const CgSmartHomeRefrigerator = (props: IconProps) => {
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
        <Path fill="currentColor" d="M9 6a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zM10 13a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1" />
        <Path fill="currentColor" fillRule="evenodd" d="M5 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3zm3-1h8a1 1 0 0 1 1 1v6H7V4a1 1 0 0 1 1-1m-1 9h10v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};