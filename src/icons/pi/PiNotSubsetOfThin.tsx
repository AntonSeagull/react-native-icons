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

export const PiNotSubsetOfThin = (props: IconProps) => {
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
        <Path d="M210.69 37a4 4 0 0 0-5.65.27L199 44h-71a84 84 0 0 0-59.37 143.36L45 213.31a4 4 0 1 0 6 5.38l23.58-25.94A83.64 83.64 0 0 0 128 212h72a4 4 0 0 0 0-8h-72a75.66 75.66 0 0 1-48.07-17.18L211 42.69a4 4 0 0 0-.31-5.69M52 128a76.08 76.08 0 0 1 76-76h63.69L74 181.43A75.75 75.75 0 0 1 52 128" />
      </G>
    </Svg>
  );
};