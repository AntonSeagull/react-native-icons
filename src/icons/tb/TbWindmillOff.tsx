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

export const TbWindmillOff = (props: IconProps) => {
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
        <Path d="M15.061 11.06C16.241 10.236 17 8.95 17 7.5 17 5.01 14.76 3 12 3v5M12 12c0 2.76 2.01 5 4.5 5q.25 0 .49-.03m2.624-1.36C20.47 14.7 21 13.42 21 12h-5M12 12c-2.76 0-5 2.01-5 4.5S9.24 21 12 21zM6.981 7.033C4.737 7.318 3 9.435 3 12h9M3 3l18 18" />
      </G>
    </Svg>
  );
};