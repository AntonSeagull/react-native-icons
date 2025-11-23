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

export const TbFileSettings = (props: IconProps) => {
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
        <Path d="M10 14a2 2 0 1 0 4 0 2 2 0 1 0-4 0M12 10.5V12M12 16v1.5M15.031 12.25l-1.299.75M10.268 15l-1.3.75M15 15.803l-1.285-.773M10.285 12.97 9 12.197M14 3v4a1 1 0 0 0 1 1h4" />
        <Path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2" />
      </G>
    </Svg>
  );
};