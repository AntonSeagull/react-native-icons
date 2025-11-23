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

export const TbRefreshOff = (props: IconProps) => {
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
        <Path d="M20 11A8.1 8.1 0 0 0 8.729 4.695m-2.41 1.624A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 13.671 4.691M20 16v-1h-1M3 3l18 18" />
      </G>
    </Svg>
  );
};