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

export const PiParallelogramLight = (props: IconProps) => {
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
        <Path d="M243.75 48.4A14 14 0 0 0 232 42H88.81A14 14 0 0 0 76 50.25l-64.8 144A14 14 0 0 0 24 214h143.19a14 14 0 0 0 12.81-8.25l64.8-144a14 14 0 0 0-1.05-13.35m-9.93 8.42-64.8 144a2 2 0 0 1-1.83 1.18H24a2 2 0 0 1-1.83-2.82L87 55.18A2 2 0 0 1 88.81 54H232a2 2 0 0 1 1.83 2.82Z" />
      </G>
    </Svg>
  );
};