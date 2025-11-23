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

export const CgTapSingle = (props: IconProps) => {
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
        <Path fill="currentColor" d="M12.05 3.114c2.143 0 4.09.843 5.526 2.216L16.16 6.744a5.98 5.98 0 0 0-4.112-1.63 5.98 5.98 0 0 0-4.21 1.725L6.424 5.425a7.97 7.97 0 0 1 5.625-2.311M10.977 11.886a1 1 0 1 1 2 0v2h-2z" />
        <Path fill="currentColor" fillRule="evenodd" d="M11.977 6.886a5 5 0 0 0-5 5v4a5 5 0 0 0 10 0v-4a5 5 0 0 0-5-5m3 9v-4a3 3 0 0 0-6 0v4a3 3 0 0 0 6 0" clipRule="evenodd" />
      </G>
    </Svg>
  );
};