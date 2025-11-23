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

export const TbPackages = (props: IconProps) => {
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
        <Path d="m7 16.5-5-3 5-3 5 3V19l-5 3z" />
        <Path d="M2 13.5V19l5 3M7 16.545l5-3.03M17 16.5l-5-3 5-3 5 3V19l-5 3zM12 19l5 3M17 16.5l5-3" />
        <Path d="M12 13.5V8L7 5l5-3 5 3v5.5M7 5.03v5.455M12 8l5-3" />
      </G>
    </Svg>
  );
};