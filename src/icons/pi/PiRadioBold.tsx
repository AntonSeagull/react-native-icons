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

export const PiRadioBold = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M160 172a36 36 0 1 0-36-36 36 36 0 0 0 36 36m0-48a12 12 0 1 1-12 12 12 12 0 0 1 12-12m56-64H113.76l81.69-24.5a12 12 0 0 0-6.9-23l-160 48A12 12 0 0 0 20 72v120a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m-4 128H44V84h168ZM60 116a12 12 0 0 1 12-12h24a12 12 0 0 1 0 24H72a12 12 0 0 1-12-12m0 40a12 12 0 0 1 12-12h24a12 12 0 0 1 0 24H72a12 12 0 0 1-12-12" />
      </G>
    </Svg>
  );
};