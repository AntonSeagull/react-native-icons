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

export const PiPaperPlaneBold = (props: IconProps) => {
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
        <Path d="m241.42 198.2-.06-.09L145.3 30.17a20 20 0 0 0-34.82 0L14.58 198.2a20 20 0 0 0 24.06 28.65L128 196.67l89.36 30.18a20 20 0 0 0 6.69 1.15 20 20 0 0 0 17.37-29.8M140 175.39V120a12 12 0 0 0-24 0v55.39l-75.28 25.43 87.17-152.76 87.37 152.75Z" />
      </G>
    </Svg>
  );
};