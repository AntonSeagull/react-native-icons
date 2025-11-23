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

export const TbRecharging = (props: IconProps) => {
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
        <Path d="M7.038 4.5a9 9 0 0 0-2.495 2.47M3.186 10.209a9 9 0 0 0 0 3.508M4.5 16.962a9 9 0 0 0 2.47 2.495M10.209 20.814a9 9 0 0 0 3.5 0M16.962 19.5a9 9 0 0 0 2.495-2.47M20.814 13.791a9 9 0 0 0 0-3.508M19.5 7.038a9 9 0 0 0-2.47-2.495M13.791 3.186a9 9 0 0 0-3.508-.02M12 8l-2 4h4l-2 4" />
        <Path d="M12 21a9 9 0 0 0 0-18" />
      </G>
    </Svg>
  );
};