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

export const VscBellSlash = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M11.027 2.086a5.13 5.13 0 0 0-2.543-1.06c-.694-.071-1.4 0-2.07.228-.67.215-1.28.574-1.794 1.053a4.9 4.9 0 0 0-1.208 1.675 5.1 5.1 0 0 0-.431 2.022v2.2c0 .772-.122 1.543-.355 2.282l1.3-1.3q.06-.49.06-.981V6.004c0-.563.12-1.113.347-1.616.227-.514.55-.969.969-1.34.419-.382.91-.67 1.436-.837.538-.18 1.1-.24 1.65-.18.697.092 1.36.362 1.92.774zM7.024 12.02h5.779l-.37-1.113a8.3 8.3 0 0 1-.444-2.691V7.055l1.005-1.004v2.142c0 .813.132 1.615.383 2.38l.586 1.771-.478.658H9.98c0 .526-.216 1.04-.587 1.412-.37.37-.885.586-1.411.586-.527 0-1.041-.215-1.412-.586a2.01 2.01 0 0 1-.585-1.354zm.958 1.998a1 1 0 0 0 .706-.3.94.94 0 0 0 .287-.705H6.977c0 .263.107.515.299.706.191.191.442.299.706.299" clipRule="evenodd" />
        <Path d="M1 14.5 15.142.358l.707.707L1.707 15.207z" />
      </G>
    </Svg>
  );
};