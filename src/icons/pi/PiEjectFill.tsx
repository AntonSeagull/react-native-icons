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

export const PiEjectFill = (props: IconProps) => {
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
        <Path d="M33.31 126.24a15.59 15.59 0 0 1 3.1-17.12l73.73-77.51a24.76 24.76 0 0 1 35.72 0l73.73 77.51a15.59 15.59 0 0 1 3.1 17.12 16.18 16.18 0 0 1-14.93 9.76H48.24a16.18 16.18 0 0 1-14.93-9.76M208 152H48a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16" />
      </G>
    </Svg>
  );
};