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

export const TbCapProjecting = (props: IconProps) => {
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
        <Path d="M20 6H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h13" />
        <Path d="M13 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M13 12h7" />
      </G>
    </Svg>
  );
};