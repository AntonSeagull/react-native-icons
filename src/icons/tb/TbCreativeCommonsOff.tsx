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

export const TbCreativeCommonsOff = (props: IconProps) => {
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
        <Path d="M5.638 5.634a9 9 0 1 0 12.723 12.733m1.686-2.332A9 9 0 0 0 7.954 3.958" />
        <Path d="M10.5 10.5a2.187 2.187 0 0 0-2.914.116 1.93 1.93 0 0 0 0 2.768 2.19 2.19 0 0 0 2.914.116M16.5 10.5a2.19 2.19 0 0 0-2.309-.302M3 3l18 18" />
      </G>
    </Svg>
  );
};