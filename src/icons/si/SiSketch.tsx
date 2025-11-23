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

export const SiSketch = (props: IconProps) => {
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
        <Path d="m12 1.25 6.75 6.637V2zm0 0-6.05 7h12.1zm0 0L5.25 2v5.887zM5.25 2 0 9l4.416-.68zM0 9l11.959 13.703.008-.014L4.443 9zm18.75-7 .834 6.32L24 9zM24 9h-4.506l-7.523 13.69.029.06zM12 22.75l-.031-.057-.008.012zM5.436 9l6.533 13.686L18.564 9z" />
      </G>
    </Svg>
  );
};