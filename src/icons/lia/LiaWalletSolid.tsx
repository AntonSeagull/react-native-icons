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

export const LiaWalletSolid = (props: IconProps) => {
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
        <Path d="M22.969 4a2.2 2.2 0 0 0-.469.063L6.25 8.343A3.024 3.024 0 0 0 4 11.25V25c0 1.645 1.355 3 3 3h18c1.645 0 3-1.355 3-3V12c0-1.645-1.355-3-3-3H11.625L23 6v2h2V6c0-1.125-.957-2.016-2.031-2M7 11h18c.566 0 1 .434 1 1v13c0 .566-.434 1-1 1H7c-.566 0-1-.434-1-1V12c0-.566.434-1 1-1m15.5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
      </G>
    </Svg>
  );
};