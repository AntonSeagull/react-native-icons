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

export const GrStarHalf = (props: IconProps) => {
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
        <Path fill="#000" fillOpacity={0.2} d="M12 16.667V2l2.5 7.5H22L16 14l3 8z" />
        <Path fill="#FFC95E" d="M12 16.667 5 22l3-8-6-4.5h7.5L12 2z" />
      </G>
    </Svg>
  );
};