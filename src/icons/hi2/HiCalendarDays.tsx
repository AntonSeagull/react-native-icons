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

export const HiCalendarDays = (props: IconProps) => {
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
        <Path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-5.25 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m.75 1.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.5-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m.75 1.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.5-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m.75 1.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.5-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m.75 1.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.5-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m-1.5-3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.5.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" />
        <Path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75m13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};