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

export const TfiPaintRoller = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M15 2V0H2v2h-.516C.666 2 0 2.675 0 3.505v2.99C0 7.325.666 8 1.484 8h6.024c.275 0 .5.225.5.5V10H7v7h3v-7h-.992V8.5c0-.827-.673-1.5-1.5-1.5H1.484A.496.496 0 0 1 1 6.495v-2.99C1 3.227 1.218 3 1.484 3H2v3h13V3h1V2zM9 16H8v-5h1zm5-11H3V1h11z" />
      </G>
    </Svg>
  );
};