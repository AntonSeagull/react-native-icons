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

export const TbWiperWash = (props: IconProps) => {
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
        <Path d="M11 20a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 11l5.5 5.5a5 5 0 0 1 7 0L21 11a12 12 0 0 0-18 0M12 20V6M4 6a4 4 0 0 1 .4-1.8M7 2.1a4 4 0 0 1 2 0" />
        <Path d="M12 6a4 4 0 0 0-.4-1.8" />
        <Path d="M12 6a4 4 0 0 1 .4-1.8M15 2.1a4 4 0 0 1 2 0M20 6a4 4 0 0 0-.4-1.8" />
      </G>
    </Svg>
  );
};