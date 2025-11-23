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

export const CgMailOpen = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M3.05 10.015a2 2 0 0 1 .465-2.1L9.879 1.55a3 3 0 0 1 4.242 0l6.364 6.364a2 2 0 0 1 .465 2.101q.049.149.05.313v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-11a1 1 0 0 1 .05-.313m1.879-.687 6.364-6.363a1 1 0 0 1 1.414 0l6.364 6.363h-.03v.03l-6.334 6.334a1 1 0 0 1-1.414 0zm14.07 2.9-4.878 4.879a3 3 0 0 1-4.242 0l-4.88-4.88v9.101h14z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};