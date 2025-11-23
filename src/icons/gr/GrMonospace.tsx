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

export const GrMonospace = (props: IconProps) => {
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
        <Path d="M11.88 17h-2.3l-.93-2.9H4.44L3.57 17H1.32L5.41 4.17h2.25ZM8 11.93 6.52 7.17l-1.43 4.76ZM14.13 17 12.22 4.17h1.66L15.07 13l1.46-8.82h1.92l1.4 9 1.23-9h1.62L20.78 17h-1.72l-1.6-9.6-1.58 9.6ZM11.36 17.95v1.39H1.89v-1.39h-.51v1.91h10.49v-1.91zM22.17 18v1.39h-9.48V18h-.5v1.91h10.49V18z" />
      </G>
    </Svg>
  );
};