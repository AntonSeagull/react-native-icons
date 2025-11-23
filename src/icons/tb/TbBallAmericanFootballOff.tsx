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

export const TbBallAmericanFootballOff = (props: IconProps) => {
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
        <Path d="m15 9-1 1m-2 2-3 3M10 12l2 2M8 21a5 5 0 0 0-5-5" />
        <Path d="M6.813 6.802A12.96 12.96 0 0 0 3 16a5 5 0 0 0 5 5 12.96 12.96 0 0 0 9.186-3.801m1.789-2.227A12.94 12.94 0 0 0 21 8a5 5 0 0 0-5-5 12.94 12.94 0 0 0-6.967 2.022" />
        <Path d="M16 3a5 5 0 0 0 5 5M3 3l18 18" />
      </G>
    </Svg>
  );
};