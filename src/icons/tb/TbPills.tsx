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

export const TbPills = (props: IconProps) => {
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
        <Path d="M3 8a5 5 0 1 0 10 0A5 5 0 1 0 3 8M13 17a4 4 0 1 0 8 0 4 4 0 1 0-8 0M4.5 4.5l7 7M19.5 14.5l-5 5" />
      </G>
    </Svg>
  );
};