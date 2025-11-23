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

export const PiPlugBold = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M240.49 63.51a12 12 0 0 0-17 0L192 95l-31-31 31.52-31.51a12 12 0 0 0-17-17L144 47l-23.51-23.49a12 12 0 1 0-17 17L107 44 56.89 94.14a44 44 0 0 0 0 62.23l12.88 12.88-46.26 46.26a12 12 0 0 0 17 17l46.26-46.26 12.88 12.88a44 44 0 0 0 62.23 0L212 149l3.51 3.52a12 12 0 0 0 17-17L209 112l31.52-31.51a12 12 0 0 0-.03-16.98m-95.6 118.63a20 20 0 0 1-28.29 0L73.86 139.4a20 20 0 0 1 0-28.29L124 61l71 71Z" />
      </G>
    </Svg>
  );
};