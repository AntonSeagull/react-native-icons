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

export const PiRadicalBold = (props: IconProps) => {
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
        <Path d="M252 80v24a12 12 0 0 1-24 0V92h-91.68L91.24 212.21a12 12 0 0 1-22.47 0l-48-128a12 12 0 1 1 22.47-8.43l36.76 98 36.77-98A12 12 0 0 1 128 68h112a12 12 0 0 1 12 12" />
      </G>
    </Svg>
  );
};