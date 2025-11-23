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

export const TbBroadcast = (props: IconProps) => {
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
        <Path d="M18.364 19.364a9 9 0 1 0-12.728 0" />
        <Path d="M15.536 16.536a5 5 0 1 0-7.072 0" />
        <Path d="M11 13a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
      </G>
    </Svg>
  );
};