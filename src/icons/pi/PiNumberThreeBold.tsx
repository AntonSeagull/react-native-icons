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

export const PiNumberThreeBold = (props: IconProps) => {
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
        <Path d="M180 160a60 60 0 0 1-100 44.72 12 12 0 1 1 16-17.88A36 36 0 1 0 120 124a12 12 0 0 1-9.6-19.2L144 60H88a12 12 0 0 1 0-24h80a12 12 0 0 1 9.6 19.2l-36.48 48.64A60.11 60.11 0 0 1 180 160" />
      </G>
    </Svg>
  );
};