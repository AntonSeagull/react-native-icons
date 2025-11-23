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

export const ImcleDown = (props: IconProps) => {
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
        <Path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0" />
        <Path d="M4.957 5.543 3.543 6.957 8 11.414l4.457-4.457-1.414-1.414L8 8.586z" />
      </G>
    </Svg>
  );
};