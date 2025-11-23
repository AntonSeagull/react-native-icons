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

export const PiSunglassesBold = (props: IconProps) => {
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
        <Path d="M200 36a12 12 0 0 0 0 24 12 12 0 0 1 12 12v52H44V72a12 12 0 0 1 12-12 12 12 0 0 0 0-24 36 36 0 0 0-36 36v92a48 48 0 0 0 96 0v-16h24v16a48 48 0 0 0 96 0V72a36 36 0 0 0-36-36M68 188a24 24 0 0 1-24-24v-9l31.74 31.74A23.9 23.9 0 0 1 68 188m24-24a25 25 0 0 1-.44 4.59L71 148h21Zm96 24a24 24 0 0 1-24-24v-9l31.74 31.74A23.9 23.9 0 0 1 188 188m24-24a25 25 0 0 1-.44 4.59L191 148h21Z" />
      </G>
    </Svg>
  );
};