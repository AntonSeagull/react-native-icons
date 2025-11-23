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

export const TbMath1Divide3 = (props: IconProps) => {
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
        <Path d="M10 15.5a.5.5 0 0 1 .5-.5h2a1.5 1.5 0 0 1 0 3h-1.167H12.5a1.5 1.5 0 0 1 0 3h-2a.5.5 0 0 1-.5-.5M5 12h14M10 5l2-2v6" />
      </G>
    </Svg>
  );
};