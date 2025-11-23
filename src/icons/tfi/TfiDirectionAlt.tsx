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

export const TfiDirectionAlt = (props: IconProps) => {
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
        <Path d="M9 6h4.695l1.938-2.563L13.687 1H9V0H8v1H2v5h6v2H3.313l-1.946 2.437L3.305 13H8v4h1v-4h6V8H9zM3 2h10.206l1.161 1.454L13.198 5H3zm11 10H3.802l-1.169-1.546L3.794 9H14z" />
      </G>
    </Svg>
  );
};