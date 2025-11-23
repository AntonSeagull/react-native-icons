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

export const TbPolygon = (props: IconProps) => {
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
        <Path d="M10 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 11a2 2 0 1 0 4 0 2 2 0 1 0-4 0M13 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M6.5 9.5l3.5-3M14 5.5 17 7M18.5 10 16 17M13.5 17.5l-7-5" />
      </G>
    </Svg>
  );
};