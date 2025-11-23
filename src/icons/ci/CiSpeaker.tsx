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

export const CiSpeaker = (props: IconProps) => {
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
        <Path d="M17.437 21.938H6.562a2.5 2.5 0 0 1-2.5-2.5V4.562a2.5 2.5 0 0 1 2.5-2.5h10.875a2.5 2.5 0 0 1 2.5 2.5v14.876a2.5 2.5 0 0 1-2.5 2.5M6.562 3.062a1.5 1.5 0 0 0-1.5 1.5v14.876a1.5 1.5 0 0 0 1.5 1.5h10.875a1.5 1.5 0 0 0 1.5-1.5V4.562a1.5 1.5 0 0 0-1.5-1.5Z" />
        <Path d="M12 18.939a3.75 3.75 0 1 1 3.75-3.75 3.755 3.755 0 0 1-3.75 3.75m0-6.5a2.75 2.75 0 1 0 2.75 2.75 2.75 2.75 0 0 0-2.75-2.75M12 9.563a2.25 2.25 0 1 1 2.25-2.25A2.253 2.253 0 0 1 12 9.563m0-3.5a1.25 1.25 0 1 0 1.25 1.25A1.25 1.25 0 0 0 12 6.063" />
      </G>
    </Svg>
  );
};