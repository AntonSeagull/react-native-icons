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

export const CiStethoscope = (props: IconProps) => {
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
        <Path d="M18.185 9.256a2.748 2.748 0 0 0-.5 5.45v2.31a2.923 2.923 0 0 1-2.92 2.92h-2.78a2.923 2.923 0 0 1-2.92-2.92v-.98a5.5 5.5 0 0 0 5-5.47v-5.28a1.48 1.48 0 0 0-1.03-1.42l-2.31-.78a.5.5 0 0 0-.63.32.49.49 0 0 0 .31.63l2.32.78a.49.49 0 0 1 .34.47v5.28a4.5 4.5 0 0 1-9 0v-5.28a.49.49 0 0 1 .34-.47l2.32-.78a.49.49 0 0 0 .31-.63.5.5 0 0 0-.63-.32l-2.31.78a1.48 1.48 0 0 0-1.03 1.42v5.28a5.5 5.5 0 0 0 5 5.47v.98a3.926 3.926 0 0 0 3.92 3.92h2.78a3.926 3.926 0 0 0 3.92-3.92v-2.31a2.748 2.748 0 0 0-.5-5.45m0 4.5a1.75 1.75 0 1 1 1.75-1.75 1.76 1.76 0 0 1-1.75 1.75" />
      </G>
    </Svg>
  );
};