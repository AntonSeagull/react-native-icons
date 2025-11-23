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

export const PiPopsicleThin = (props: IconProps) => {
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
        <Path d="M128 12a68.07 68.07 0 0 0-68 68v96a12 12 0 0 0 12 12h36v44a20 20 0 0 0 40 0v-44h36a12 12 0 0 0 12-12V80a68.07 68.07 0 0 0-68-68m12 220a12 12 0 0 1-24 0v-44h24Zm48-56a4 4 0 0 1-4 4H72a4 4 0 0 1-4-4V80a60 60 0 0 1 120 0ZM116 72v80a4 4 0 0 1-8 0V72a4 4 0 0 1 8 0m32 0v80a4 4 0 0 1-8 0V72a4 4 0 0 1 8 0" />
      </G>
    </Svg>
  );
};