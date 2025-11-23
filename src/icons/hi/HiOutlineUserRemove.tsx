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

export const HiOutlineUserRemove = (props: IconProps) => {
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
        <Path strokeLinecap="round" strokeLinejoin="round" d="M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-4 7a6 6 0 0 0-6 6v1h12v-1a6 6 0 0 0-6-6m12-2h-6" />
      </G>
    </Svg>
  );
};