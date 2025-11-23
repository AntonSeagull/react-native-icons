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

export const PiAirplaneInFlightLight = (props: IconProps) => {
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
        <Path d="M222 216a6 6 0 0 1-6 6H72a6 6 0 0 1 0-12h144a6 6 0 0 1 6 6m24-80v24a6 6 0 0 1-6 6H61.07a37.77 37.77 0 0 1-36.4-27.08L10.6 92A14 14 0 0 1 24 74h8a6 6 0 0 1 4.24 1.76L58.49 98h26.1l-9.86-29.57A14 14 0 0 1 88 50h8a6 6 0 0 1 4.25 1.76L146.49 98H208a38 38 0 0 1 38 38m-12 0a26 26 0 0 0-26-26h-64a6 6 0 0 1-4.24-1.76L93.52 62H88a2 2 0 0 0-1.9 2.63l12.5 37.47a6 6 0 0 1-5.69 7.9H56a6 6 0 0 1-4.24-1.76L29.52 86H24a1.93 1.93 0 0 0-1.6.81 1.91 1.91 0 0 0-.31 1.76l14.06 46.9A25.86 25.86 0 0 0 61.07 154H234Z" />
      </G>
    </Svg>
  );
};