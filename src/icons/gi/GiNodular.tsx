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

export const GiNodular = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M256 16a90 90 0 0 0-15 178.593v48.75a60 60 0 0 0 0 115.782v49.688A45 45 0 0 0 256 496a45 45 0 0 0 15-87.188v-50.157a60 60 0 0 0 0-115.78V194.59a90 90 0 0 0-15-178.594zm-2.813 30A60 60 0 0 1 256 46a60 60 0 0 1 0 120 60.017 60.017 0 0 1-2.813-120" />
      </G>
    </Svg>
  );
};