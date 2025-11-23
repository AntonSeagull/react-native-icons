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

export const TbTimezone = (props: IconProps) => {
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
        <Path d="M20.884 10.554a9 9 0 1 0-10.337 10.328M3.6 9h16.8M3.6 15h6.9" />
        <Path d="M11.5 3a17 17 0 0 0-1.502 14.954M12.5 3a17 17 0 0 1 2.52 7.603M14 18a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
        <Path d="M18 16.5V18l.5.5" />
      </G>
    </Svg>
  );
};