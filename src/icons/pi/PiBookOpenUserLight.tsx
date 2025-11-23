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

export const PiBookOpenUserLight = (props: IconProps) => {
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
        <Path d="M232 74h-72a38 38 0 0 0-32 17.55A38 38 0 0 0 96 74H24a6 6 0 0 0-6 6v120a6 6 0 0 0 6 6h72a26 26 0 0 1 26 26 6 6 0 0 0 12 0 26 26 0 0 1 26-26h72a6 6 0 0 0 6-6V80a6 6 0 0 0-6-6M96 194H30V86h66a26 26 0 0 1 26 26v92.31A37.86 37.86 0 0 0 96 194m130 0h-66a37.83 37.83 0 0 0-26 10.33V112a26 26 0 0 1 26-26h66ZM91.2 44.4a46 46 0 0 1 73.6 0 6 6 0 1 1-9.6 7.2 34 34 0 0 0-54.4 0 6 6 0 1 1-9.6-7.2" />
      </G>
    </Svg>
  );
};