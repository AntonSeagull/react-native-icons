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

export const TiCode = (props: IconProps) => {
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
        <Path d="M8.171 18a2 2 0 0 1-1.414-.586L2.343 13l4.414-4.414a2 2 0 1 1 2.828 2.828L8 13l1.585 1.586A2 2 0 0 1 8.171 18m7.658 0a2 2 0 0 1-1.414-3.414L16 13l-1.585-1.586a2 2 0 1 1 2.828-2.828L21.657 13l-4.414 4.414a2 2 0 0 1-1.414.586" />
      </G>
    </Svg>
  );
};