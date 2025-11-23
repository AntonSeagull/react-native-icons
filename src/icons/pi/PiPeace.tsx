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

export const PiPeace = (props: IconProps) => {
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
        <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m88 104a87.5 87.5 0 0 1-11.64 43.7L136 123.84V40.37A88.11 88.11 0 0 1 216 128m-96-87.63v83.47L51.64 171.7A88 88 0 0 1 120 40.37M60.84 184.79 120 143.37v72.26a87.85 87.85 0 0 1-59.16-30.84M136 215.63v-72.26l59.16 41.42A87.85 87.85 0 0 1 136 215.63" />
      </G>
    </Svg>
  );
};