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

export const PiCloudFogBold = (props: IconProps) => {
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
        <Path d="M120 208H72a12 12 0 0 1 0-24h48a12 12 0 0 1 0 24m64-24h-24a12 12 0 0 0 0 24h24a12 12 0 0 0 0-24m-24 36h-56a12 12 0 0 0 0 24h56a12 12 0 0 0 0-24m72-124a76.08 76.08 0 0 1-76 76H76a52 52 0 1 1 9-103.22A76 76 0 0 1 232 96m-24 0a52 52 0 0 0-104 0 12 12 0 0 1-24 0c0-1.24 0-2.48.09-3.71A29 29 0 0 0 76 92a28 28 0 0 0 0 56h80a52.06 52.06 0 0 0 52-52" />
      </G>
    </Svg>
  );
};