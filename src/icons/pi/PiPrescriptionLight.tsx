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

export const PiPrescriptionLight = (props: IconProps) => {
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
        <Path d="m180.49 188 23.75-23.76a6 6 0 0 0-8.48-8.48L172 179.51l-45.58-45.57A50 50 0 0 0 124 34H72a6 6 0 0 0-6 6v152a6 6 0 0 0 12 0v-58h31.51l54 54-23.75 23.76a6 6 0 1 0 8.48 8.48L172 196.49l23.76 23.75a6 6 0 0 0 8.48-8.48ZM78 46h46a38 38 0 0 1 0 76H78Z" />
      </G>
    </Svg>
  );
};