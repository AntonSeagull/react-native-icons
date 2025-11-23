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

export const IoDiamondSharp = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M396.31 32H264l84.19 112.26zM115.69 32l48.12 112.26L248 32zM256 74.67 192 160h128zM422.95 51.06 376.26 160H488zM89.05 51.06 23 160h112.74zM146.68 192H24l222.8 288h.53zM365.32 192 264.67 480h.53L488 192zM329.39 192H182.61L256 400z" />
      </G>
    </Svg>
  );
};