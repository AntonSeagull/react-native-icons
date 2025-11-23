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

export const TbBat = (props: IconProps) => {
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
        <Path d="M17 16c.74-2.286 2.778-3.762 5-3-.173-2.595.13-5.314-2-7.5-1.708 2.648-3.358 2.557-5 2.5V4l-3 2-3-2v4c-1.642.057-3.292.148-5-2.5-2.13 2.186-1.827 4.905-2 7.5 2.222-.762 4.26.714 5 3 2.593 0 3.889.952 5 4 1.111-3.048 2.407-4 5-4" />
        <Path d="M9 8a3 3 0 0 0 6 0" />
      </G>
    </Svg>
  );
};