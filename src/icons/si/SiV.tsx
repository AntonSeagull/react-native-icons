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

export const SiV = (props: IconProps) => {
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
        <Path d="M15.583 23.497c.067.192-.043.348-.247.348H9.074c-.408 0-.85-.311-.988-.695L.043.784C-.105.393.149.115.528.16L6.92.776c.405.039.844.383.978.767zM23.473.16l-6.392.616c-.406.039-.844.383-.978.768l-3.827 10.99 3.678 10.509L23.959.783c.137-.383-.08-.662-.485-.623" />
      </G>
    </Svg>
  );
};