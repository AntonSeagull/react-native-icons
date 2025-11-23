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

export const FcOk = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Circle cx={24} cy={24} r={21} fill="#4CAF50" />
        <Path fill="#CCFF90" d="M34.6 14.6 21 28.2l-5.6-5.6-2.8 2.8 8.4 8.4 16.4-16.4z" />
      </G>
    </Svg>
  );
};