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

export const PiCloudSnowBold = (props: IconProps) => {
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
        <Path d="M184 208a16 16 0 1 1-16-16 16 16 0 0 1 16 16m-64-16a16 16 0 1 0 16 16 16 16 0 0 0-16-16m-48 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16M236 92a80.09 80.09 0 0 1-80 80H76a56 56 0 0 1 0-112 57 57 0 0 1 6.39.36A80.08 80.08 0 0 1 236 92m-24 0a56.06 56.06 0 0 0-112-3.31 12 12 0 1 1-24-1.38c.06-1.11.15-2.21.26-3.31H76a32 32 0 0 0 0 64h80a56.06 56.06 0 0 0 56-56" />
      </G>
    </Svg>
  );
};