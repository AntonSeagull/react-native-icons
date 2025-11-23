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

export const BiTone = (props: IconProps) => {
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
        <Path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2m-1 9H4.069a8 8 0 0 1 .52-2H11zm0 4H4.589a8 8 0 0 1-.52-2H11zm0-10.931V7H5.765A8 8 0 0 1 11 4.069M5.765 17H11v2.931A8 8 0 0 1 5.765 17M13 19.931V4.069c3.939.495 7 3.858 7 7.931s-3.061 7.436-7 7.931" />
      </G>
    </Svg>
  );
};