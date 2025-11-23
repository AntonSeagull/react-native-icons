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

export const TbDeviceGamepad3Filled = (props: IconProps) => {
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
        <Path d="m12.707 14.293 3 3A1 1 0 0 1 16 18v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 .293-.707l3-3a1 1 0 0 1 1.414 0M6 8a1 1 0 0 1 .707.293l3 3a1 1 0 0 1 0 1.414l-3 3A1 1 0 0 1 6 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm14 0a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2a1 1 0 0 1-.707-.293l-3-3a1 1 0 0 1 0-1.414l3-3A1 1 0 0 1 18 8zm-6-6a2 2 0 0 1 2 2v2a1 1 0 0 1-.293.707l-3 3a1 1 0 0 1-1.414 0l-3-3A1 1 0 0 1 8 6V4a2 2 0 0 1 2-2z" />
      </G>
    </Svg>
  );
};