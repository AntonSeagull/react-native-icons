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

export const TbMusicOff = (props: IconProps) => {
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
        <Path d="M3 17a3 3 0 1 0 6 0 3 3 0 1 0-6 0M14.42 14.45a3 3 0 1 0 4.138 4.119M9 17V9m0-4V4h10v11M12 8h7M3 3l18 18" />
      </G>
    </Svg>
  );
};