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

export const PiWifiLowLight = (props: IconProps) => {
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
        <Path d="M138 204a10 10 0 1 1-10-10 10 10 0 0 1 10 10m33.53-43.85a74 74 0 0 0-87.06 0 6 6 0 0 0 7.06 9.7 62 62 0 0 1 72.94 0 6 6 0 0 0 8.38-1.32 6 6 0 0 0-1.32-8.38" />
      </G>
    </Svg>
  );
};