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

export const Imckmark2 = (props: IconProps) => {
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
        <Path d="M6.21 14.339-.007 8.22l3.084-3.035L6.21 8.268l6.713-6.607 3.084 3.035zM1.686 8.22l4.524 4.453 8.104-7.976-1.391-1.369L6.21 9.935 3.077 6.852 1.686 8.221z" />
      </G>
    </Svg>
  );
};