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

export const PiEyeglassesBold = (props: IconProps) => {
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
        <Path d="M200 36a12 12 0 0 0 0 24 12 12 0 0 1 12 12v50.46A47.94 47.94 0 0 0 142.75 148h-29.5A47.94 47.94 0 0 0 44 122.46V72a12 12 0 0 1 12-12 12 12 0 0 0 0-24 36 36 0 0 0-36 36v92a48 48 0 0 0 95.32 8h25.36a48 48 0 0 0 95.32-8V72a36 36 0 0 0-36-36M68 188a24 24 0 1 1 24-24 24 24 0 0 1-24 24m120 0a24 24 0 1 1 24-24 24 24 0 0 1-24 24" />
      </G>
    </Svg>
  );
};