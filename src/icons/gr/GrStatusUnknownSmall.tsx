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

export const GrStatusUnknownSmall = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 12 12"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 6, 6)`}
    >
      <G fill={fill} stroke={stroke}>
        <Rect width={10} height={10} x={1} y={1} fillRule="evenodd" stroke="#000" rx={1} />
      </G>
    </Svg>
  );
};