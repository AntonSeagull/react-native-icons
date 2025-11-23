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

export const PiParkLight = (props: IconProps) => {
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
        <Path d="M232 194h-34v-28h26a6 6 0 0 0 5.82-7.46l-32-128a6 6 0 0 0-11.64 0l-32 128A6 6 0 0 0 160 166h26v28h-68v-20h10a6 6 0 0 0 0-12h-10v-20h10a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12h10v20H40a6 6 0 0 0 0 12h10v20H24a6 6 0 0 0 0 12h208a6 6 0 0 0 0-12M192 56.74 216.32 154h-48.64ZM62 142h44v20H62Zm0 32h44v20H62Zm54-80a26 26 0 1 0-26-26 26 26 0 0 0 26 26m0-40a14 14 0 1 1-14 14 14 14 0 0 1 14-14" />
      </G>
    </Svg>
  );
};