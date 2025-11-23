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

export const LiaSlidersHSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M15 5c-1.293 0-2.395.844-2.812 2H4v2h8.188c.417 1.156 1.519 2 2.812 2s2.395-.844 2.813-2H28V7H17.813c-.418-1.156-1.52-2-2.813-2m0 2c.563 0 1 .438 1 1s-.437 1-1 1-1-.437-1-1 .438-1 1-1m7 6c-1.293 0-2.395.844-2.812 2H4v2h15.188c.417 1.156 1.519 2 2.812 2s2.395-.844 2.813-2H28v-2h-3.187c-.418-1.156-1.52-2-2.813-2m0 2c.563 0 1 .438 1 1s-.437 1-1 1-1-.437-1-1 .438-1 1-1m-11 6c-1.293 0-2.395.844-2.812 2H4v2h4.188c.417 1.156 1.519 2 2.812 2s2.395-.844 2.813-2H28v-2H13.813c-.418-1.156-1.52-2-2.813-2m0 2c.563 0 1 .438 1 1s-.437 1-1 1-1-.437-1-1 .438-1 1-1" />
      </G>
    </Svg>
  );
};