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

export const TbTractor = (props: IconProps) => {
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
        <Path d="M3 15a4 4 0 1 0 8 0 4 4 0 1 0-8 0M7 15v.01M17 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M10.5 17H17" />
        <Path d="M20 15.2V11a1 1 0 0 0-1-1h-6l-2-5H5v6.5" />
        <Path d="M18 5h-1a1 1 0 0 0-1 1v4" />
      </G>
    </Svg>
  );
};