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

export const TbRuler2Off = (props: IconProps) => {
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
        <Path d="M12.03 7.97 17 3l4 4-5 5m-2 2-7 7-4-4 7-7M16 7l-1.5-1.5M10 13l-1.5-1.5M7 16l-1.5-1.5M3 3l18 18" />
      </G>
    </Svg>
  );
};