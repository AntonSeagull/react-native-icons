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

export const GiAcid = (props: IconProps) => {
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
        <Path d="M256.875 16A30 30 0 0 0 226 46a30 30 0 0 0 60 0 30 30 0 0 0-29.125-30m-45 75A30 30 0 0 0 181 121a30 30 0 0 0 60 0 30 30 0 0 0-29.125-30m74.563 30A15 15 0 0 0 271 136a15 15 0 0 0 30 0 15 15 0 0 0-14.563-15zm-30 45A15 15 0 0 0 241 181a15 15 0 0 0 30 0 15 15 0 0 0-14.563-15zM196 196c-45 0-15 30 0 45 0 150-120 225-120 255h360c0-30-120-105-120-255 15-15 45-45 0-45-15 0-30 15-60 15s-45-15-60-15" />
      </G>
    </Svg>
  );
};