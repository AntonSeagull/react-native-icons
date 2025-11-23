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

export const ImudDownload = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M13.922 5.626A3.72 3.72 0 0 0 10.205 2a3.71 3.71 0 0 0-2.92 1.418 2.09 2.09 0 0 0-3.719 1.573 3.028 3.028 0 0 0-3.567 2.98A3.03 3.03 0 0 0 3.026 11H4.46l3.539 3.664L11.538 11h1.742a2.725 2.725 0 0 0 .641-5.374zM8 13l-3-3h2V7h2v3h2z" />
      </G>
    </Svg>
  );
};