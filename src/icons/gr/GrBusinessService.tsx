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

export const GrBusinessService = (props: IconProps) => {
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
        <Path fill="none" stroke="#000" strokeWidth={2} d="M4 23H1V5h22v18h-7M8 5V1h8v4M9 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm5.008 1.876Q14.486 18 15 18a4 4 0 1 0-2.236-7.317m-5.062 5.043A4 4 0 0 0 10 23a4 4 0 0 0 1.401-7.748" />
      </G>
    </Svg>
  );
};