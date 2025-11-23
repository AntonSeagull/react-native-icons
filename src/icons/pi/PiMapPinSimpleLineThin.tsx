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

export const PiMapPinSimpleLineThin = (props: IconProps) => {
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
        <Path d="M216 212h-84v-80.17a52 52 0 1 0-8 0V212H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8M84 80a44 44 0 1 1 44 44 44.05 44.05 0 0 1-44-44" />
      </G>
    </Svg>
  );
};