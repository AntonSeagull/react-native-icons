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

export const PiBinaryBold = (props: IconProps) => {
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
        <Path d="M92 24c-23.55 0-40 19.74-40 48s16.45 48 40 48 40-19.74 40-48-16.45-48-40-48m0 72c-15.55 0-16-21.54-16-24s.45-24 16-24 16 21.54 16 24-.45 24-16 24m53.27-42.63a12 12 0 0 1 5.36-16.1l24-12A12 12 0 0 1 192 36v72a12 12 0 0 1-24 0V55.42l-6.63 3.31a12 12 0 0 1-16.1-5.36M164 136c-23.55 0-40 19.74-40 48s16.45 48 40 48 40-19.74 40-48-16.45-48-40-48m0 72c-15.55 0-16-21.54-16-24s.45-24 16-24 16 21.54 16 24-.45 24-16 24m-60-60v72a12 12 0 0 1-24 0v-52.58l-6.63 3.31a12 12 0 1 1-10.74-21.46l24-12A12 12 0 0 1 104 148" />
      </G>
    </Svg>
  );
};