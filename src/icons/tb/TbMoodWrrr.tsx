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

export const TbMoodWrrr = (props: IconProps) => {
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
        <Path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18" />
        <Path d="m8 16 1-1 1.5 1 1.5-1 1.5 1 1.5-1 1 1M8.5 11.5 10 10 8.5 8.5M15.5 11.5 14 10l1.5-1.5" />
      </G>
    </Svg>
  );
};