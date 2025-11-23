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

export const CiTempHigh = (props: IconProps) => {
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
        <Path d="M14.863 13.4V4.939a2.93 2.93 0 0 0-.84-2.03 2.86 2.86 0 0 0-2.23-.82 2.95 2.95 0 0 0-2.66 3l.01 8.28a4.755 4.755 0 0 0 1.9 8.46 5 5 0 0 0 .95.09 4.76 4.76 0 0 0 4.76-4.75 4.68 4.68 0 0 0-1.89-3.769m-.48 6.66a3.78 3.78 0 0 1-3.15.78 3.7 3.7 0 0 1-2.92-2.98 3.75 3.75 0 0 1 1.43-3.69.96.96 0 0 0 .39-.77V5.089a1.97 1.97 0 0 1 1.73-2 .7.7 0 0 1 .14-.01 1.88 1.88 0 0 1 1.86 1.86V13.4a.96.96 0 0 0 .39.77 3.742 3.742 0 0 1 .13 5.89" />
        <Path d="M13.893 17.169a1.89 1.89 0 0 1-3.78 0 1.86 1.86 0 0 1 1.39-1.81V5.4a.5.5 0 0 1 1 0v9.96a1.87 1.87 0 0 1 1.39 1.809" />
      </G>
    </Svg>
  );
};