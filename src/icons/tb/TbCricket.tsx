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

export const TbCricket = (props: IconProps) => {
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
        <Path d="m11.105 18.79-1 .992a4.159 4.159 0 0 1-6.038-5.715l.157-.166L12.506 5.5l1.5 1.5 3.45-3.391a2.08 2.08 0 0 1 3.057 2.815l-.116.126L17.006 10l1.5 1.5-3.668 3.617M10.5 7.5l6 6" />
        <Path d="M11 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
      </G>
    </Svg>
  );
};