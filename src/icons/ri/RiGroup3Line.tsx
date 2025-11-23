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

export const RiGroup3Line = (props: IconProps) => {
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
        <Path d="M8.5 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-6 0a4 4 0 1 0 8 0 4 4 0 0 0-8 0M9 16.5a2.5 2.5 0 0 0-5 0V19h5zm2 4.5H2v-4.5a4.5 4.5 0 1 1 9 0zm8.5-14a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-6 0a4 4 0 1 0 8 0 4 4 0 0 0-8 0m6.5 9.5a2.5 2.5 0 0 0-5 0V19h5zM13 19v-2.5a4.5 4.5 0 1 1 9 0V21h-9z" />
      </G>
    </Svg>
  );
};