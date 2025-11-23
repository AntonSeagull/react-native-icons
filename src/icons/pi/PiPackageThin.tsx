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

export const PiPackageThin = (props: IconProps) => {
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
        <Path d="m221.76 69.66-88-48.18a12 12 0 0 0-11.52 0l-88 48.18A12 12 0 0 0 28 80.18v95.64a12 12 0 0 0 6.24 10.52l88 48.18a11.95 11.95 0 0 0 11.52 0l88-48.18a12 12 0 0 0 6.24-10.52V80.18a12 12 0 0 0-6.24-10.52M126.08 28.5a3.94 3.94 0 0 1 3.84 0L216.67 76 178.5 96.89a4 4 0 0 0-.58-.4l-88-48.18Zm1.92 96L39.33 76l42.23-23.13 88.67 48.54Zm-89.92 54.8a4 4 0 0 1-2.08-3.5V83.29l88 48.16v94.91Zm179.84 0-85.92 47v-94.85l40-21.89V152a4 4 0 0 0 8 0v-46.82l40-21.89v92.53a4 4 0 0 1-2.08 3.5Z" />
      </G>
    </Svg>
  );
};