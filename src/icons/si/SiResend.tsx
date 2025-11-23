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

export const SiResend = (props: IconProps) => {
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
        <Path d="M2.023 0v24h5.553v-8.434h2.998L15.326 24h6.65l-5.372-9.258a7.65 7.65 0 0 0 3.316-3.016q1.063-1.815 1.062-4.08 0-2.194-1.062-3.91-1.063-1.747-2.95-2.742Q15.12 0 12.823 0Zm5.553 4.87h4.219q1.097 0 1.851.376.788.378 1.2 1.098.412.685.412 1.611c0 .926-.126 1.165-.378 1.645q-.343.72-1.03 1.13-.651.379-1.542.38H7.576Z" />
      </G>
    </Svg>
  );
};