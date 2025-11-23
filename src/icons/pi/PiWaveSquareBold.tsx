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

export const PiWaveSquareBold = (props: IconProps) => {
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
        <Path d="M244 128v56a12 12 0 0 1-12 12H128a12 12 0 0 1-12-12V84H36v44a12 12 0 0 1-24 0V72a12 12 0 0 1 12-12h104a12 12 0 0 1 12 12v100h80v-44a12 12 0 0 1 24 0" />
      </G>
    </Svg>
  );
};