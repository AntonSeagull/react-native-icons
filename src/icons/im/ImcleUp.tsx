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

export const ImcleUp = (props: IconProps) => {
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
        <Path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m14.5 0a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0" />
        <Path d="m11.043 10.457 1.414-1.414L8 4.586 3.543 9.043l1.414 1.414L8 7.414z" />
      </G>
    </Svg>
  );
};