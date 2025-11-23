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

export const PiPicnicTableDuotone = (props: IconProps) => {
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
        <Path d="M224 192H32L96 64h64Z" opacity={0.2} />
        <Path d="M248 128h-47.06l-28-56H192a8 8 0 0 0 0-16H64a8 8 0 0 0 0 16h19.06l-28 56H8a8 8 0 0 0 0 16h39.06l-22.22 44.42a8 8 0 0 0 3.58 10.73A7.9 7.9 0 0 0 32 200a8 8 0 0 0 7.17-4.42L64.94 144h126.12l25.78 51.58A8 8 0 0 0 224 200a7.9 7.9 0 0 0 3.57-.85 8 8 0 0 0 3.58-10.73L208.94 144H248a8 8 0 0 0 0-16m-175.06 0 28-56h54.12l28 56Z" />
      </G>
    </Svg>
  );
};