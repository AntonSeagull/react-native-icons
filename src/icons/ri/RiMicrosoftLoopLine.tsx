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

export const RiMicrosoftLoopLine = (props: IconProps) => {
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
        <Path d="M12 4a8 8 0 1 1 0 16H7.69a6.5 6.5 0 0 0 1.734-3.5H12A4.5 4.5 0 1 0 7.5 12v3.5A4.5 4.5 0 0 1 4 19.889V12a8 8 0 0 1 8-8m0 18c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12v10zm-2.5-7.5V12a2.5 2.5 0 1 1 2.5 2.5z" />
      </G>
    </Svg>
  );
};