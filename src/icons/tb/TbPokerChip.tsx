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

export const TbPokerChip = (props: IconProps) => {
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
        <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
        <Path d="M7 12a5 5 0 1 0 10 0 5 5 0 1 0-10 0M12 3v4M12 17v4M3 12h4M17 12h4M18.364 5.636l-2.828 2.828M8.464 15.536l-2.828 2.828M5.636 5.636l2.828 2.828M15.536 15.536l2.828 2.828" />
      </G>
    </Svg>
  );
};