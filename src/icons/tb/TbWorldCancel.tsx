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

export const TbWorldCancel = (props: IconProps) => {
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
        <Path d="M21 12a9 9 0 1 0-8.985 9M3.6 9h16.8M3.6 15h9.9" />
        <Path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 2.53 10.275M16 19a3 3 0 1 0 6 0 3 3 0 1 0-6 0M17 21l4-4" />
      </G>
    </Svg>
  );
};