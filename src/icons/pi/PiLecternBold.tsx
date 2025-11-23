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

export const PiLecternBold = (props: IconProps) => {
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
        <Path d="m249.87 119.06-40-80A19.89 19.89 0 0 0 192 28H64a19.89 19.89 0 0 0-17.87 11.06l-40 80A20 20 0 0 0 24 148h92v56H96a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24h-20v-56h92a20 20 0 0 0 17.89-28.94ZM30.49 124l36-72h123l36 72ZM192 100a12 12 0 0 1-12 12H76a12 12 0 0 1 0-24h104a12 12 0 0 1 12 12" />
      </G>
    </Svg>
  );
};