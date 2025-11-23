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

export const SiPinescript = (props: IconProps) => {
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
        <Path d="M3.785 16.14.124 21.287a.66.66 0 0 0 .536 1.044h22.681a.662.662 0 0 0 .536-1.045l-4.2-5.927-1.979 1.161a1.98 1.98 0 0 1-1.976 1.913 1.98 1.98 0 0 1-1.97-2.147l-3.173-2.328a1.97 1.97 0 0 1-2.674-.164zm7.693-14.194L3.813 12.732a.663.663 0 0 0 .197.95l.691.417 2.66-1.515a2 2 0 0 1-.007-.163 1.98 1.98 0 0 1 1.977-1.982 1.98 1.98 0 0 1 1.935 2.385l3.047 2.237a1.972 1.972 0 0 1 2.969.172l2.831-1.66a.665.665 0 0 0 .068-.849L12.553 1.948a.658.658 0 0 0-1.075-.002" />
      </G>
    </Svg>
  );
};