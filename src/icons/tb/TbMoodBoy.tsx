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

export const TbMoodBoy = (props: IconProps) => {
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
        <Path d="M17 4.5a9 9 0 0 1 3.864 5.89 2.5 2.5 0 0 1-.29 4.36 9 9 0 0 1-17.137 0 2.5 2.5 0 0 1-.29-4.36 9 9 0 0 1 3.746-5.81" />
        <Path d="M9.5 16a3.5 3.5 0 0 0 5 0M8.5 2C10 3 11 5.5 11 7M12.5 2c1.5 2 2 3.5 2 5M9 12h.01M15 12h.01" />
      </G>
    </Svg>
  );
};