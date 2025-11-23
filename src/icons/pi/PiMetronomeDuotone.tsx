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

export const PiMetronomeDuotone = (props: IconProps) => {
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
        <Path d="M200 216H56a8 8 0 0 1-7.63-10.43l12-37.57h135.29l12 37.57A8 8 0 0 1 200 216" opacity={0.2} />
        <Path d="m187.14 114.84 26.78-29.46a8 8 0 0 0-11.84-10.76l-20.55 22.6-17.2-54.07A15.94 15.94 0 0 0 149.08 32h-42.17a15.94 15.94 0 0 0-15.25 11.15l-50.91 160A16 16 0 0 0 56 224h144a16 16 0 0 0 15.25-20.85ZM184.72 160h-38.64l28.62-31.48ZM106.91 48h42.17l20 62.9-44.62 49.1H71.27ZM56 208l10.18-32h123.63L200 208Z" />
      </G>
    </Svg>
  );
};