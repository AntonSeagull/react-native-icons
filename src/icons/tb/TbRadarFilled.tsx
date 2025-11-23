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

export const TbRadarFilled = (props: IconProps) => {
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
        <Path d="M12 10a2 2 0 0 1 1.678.911l.053.089H21l.117.007A1 1 0 0 1 22 12c0 5.523-4.477 10-10 10a1 1 0 0 1-1-1v-7.269l-.089-.053a2 2 0 0 1-.906-1.529L10 12a2 2 0 0 1 2-2m9.428-1.334a1 1 0 0 1-1.884.668A8 8 0 1 0 9.337 19.552a1 1 0 0 1-.666 1.886A10 10 0 1 1 21.428 8.666M16.8 8.4a1 1 0 0 1-1.6 1.2 4 4 0 1 0-5.6 5.6 1 1 0 0 1-1.2 1.6 6 6 0 1 1 8.4-8.4" />
      </G>
    </Svg>
  );
};