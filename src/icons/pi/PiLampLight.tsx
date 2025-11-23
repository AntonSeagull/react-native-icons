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

export const PiLampLight = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m245.51 149.64-48-112A6 6 0 0 0 192 34H64a6 6 0 0 0-5.51 3.64l-48 112A6 6 0 0 0 16 158h106v52H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12h-26v-52h60v34a6 6 0 0 0 12 0v-34h34a6 6 0 0 0 5.51-8.36M25.1 146 68 46h120l42.9 100Z" />
      </G>
    </Svg>
  );
};