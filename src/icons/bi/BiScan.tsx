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

export const BiScan = (props: IconProps) => {
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
        <Path d="M3 4v5h2V5h4V3H4a1 1 0 0 0-1 1m18 5V4a1 1 0 0 0-1-1h-5v2h4v4zm-2 10h-4v2h5a1 1 0 0 0 1-1v-5h-2zM9 21v-2H5v-4H3v5a1 1 0 0 0 1 1zM2 11h20v2H2z" />
      </G>
    </Svg>
  );
};