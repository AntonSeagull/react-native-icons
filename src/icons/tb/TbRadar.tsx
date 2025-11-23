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

export const TbRadar = (props: IconProps) => {
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
        <Path d="M21 12h-8a1 1 0 1 0-1 1v8a9 9 0 0 0 9-9" />
        <Path d="M16 9a5 5 0 1 0-7 7" />
        <Path d="M20.486 9A9 9 0 1 0 9.004 20.495" />
      </G>
    </Svg>
  );
};