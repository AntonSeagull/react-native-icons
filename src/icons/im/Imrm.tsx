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

export const Imrm = (props: IconProps) => {
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
        <Path d="M8 2a7 7 0 1 0 0 14A7 7 0 0 0 8 2m0 12.625a5.624 5.624 0 1 1 0-11.25 5.624 5.624 0 1 1 0 11.25m6.606-10.138a3 3 0 0 0-4.98-3.321 8 8 0 0 1 4.98 3.322zM6.374 1.166a3 3 0 0 0-4.98 3.321 8 8 0 0 1 4.98-3.322z" />
        <Path d="M8 9V5H7v5h4V9z" />
      </G>
    </Svg>
  );
};