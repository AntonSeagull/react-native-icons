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

export const GrStatusGoodSmall = (props: IconProps) => {
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
        <Circle cx={6} cy={6} r={5} fillRule="evenodd" stroke="#000" />
      </G>
    </Svg>
  );
};