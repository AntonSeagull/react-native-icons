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

export const TbPlant2Off = (props: IconProps) => {
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
        <Path d="M2 9c0 5.523 4.477 10 10 10a9.95 9.95 0 0 0 5.418-1.593m2.137-1.855A9.96 9.96 0 0 0 22 9" />
        <Path d="M12 19c0-1.988.58-3.84 1.58-5.397m1.878-2.167A9.96 9.96 0 0 1 22 9M2 9a10 10 0 0 1 10 10M12 4a9.7 9.7 0 0 1 3 7.013" />
        <Path d="M9.01 11.5a9.7 9.7 0 0 1 .163-2.318m1.082-2.942A9.7 9.7 0 0 1 12 4M3 3l18 18" />
      </G>
    </Svg>
  );
};