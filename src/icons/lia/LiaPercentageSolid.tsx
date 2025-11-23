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

export const LiaPercentageSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M5 5v22h22V5Zm2 2h18v18H7Zm5 2c-1.645 0-3 1.355-3 3v1c0 1.645 1.355 3 3 3s3-1.355 3-3v-1c0-1.645-1.355-3-3-3m7.594 0L10 23h2.406L22 9ZM12 11c.566 0 1 .434 1 1v1c0 .566-.434 1-1 1s-1-.434-1-1v-1c0-.566.434-1 1-1m8 5c-1.645 0-3 1.355-3 3v1c0 1.645 1.355 3 3 3s3-1.355 3-3v-1c0-1.645-1.355-3-3-3m0 2c.566 0 1 .434 1 1v1c0 .566-.434 1-1 1s-1-.434-1-1v-1c0-.566.434-1 1-1" />
      </G>
    </Svg>
  );
};