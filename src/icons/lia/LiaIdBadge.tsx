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

export const LiaIdBadge = (props: IconProps) => {
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
        <Path d="M15 3c-1.094 0-2 .906-2 2H7v23h18V5h-6c0-1.094-.906-2-2-2Zm0 2h2v2h-2ZM9 7h4v2h6V7h4v19H9Zm7 4c-2.2 0-4 1.8-4 4 0 1.113.477 2.117 1.219 2.844A5.04 5.04 0 0 0 11 22h2c0-1.668 1.332-3 3-3s3 1.332 3 3h2a5.04 5.04 0 0 0-2.219-4.156C19.523 17.117 20 16.114 20 15c0-2.2-1.8-4-4-4m0 2c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2" />
      </G>
    </Svg>
  );
};