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

export const PiCloudLightningLight = (props: IconProps) => {
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
        <Path d="M156 18a74.21 74.21 0 0 0-69.89 49.3 6.2 6.2 0 0 0-1.83-.62A51 51 0 0 0 76 66a50 50 0 0 0 0 100h41.4l-18.55 30.91A6 6 0 0 0 104 206h29.4l-18.55 30.91a6 6 0 0 0 10.3 6.18l24-40A6 6 0 0 0 144 194h-29.4l16.8-28H156a74 74 0 0 0 0-148m0 136H76a38 38 0 1 1 6.31-75.48 7 7 0 0 0 .79.08 73 73 0 0 0-1.1 9.05 6 6 0 0 0 12 .7A62.06 62.06 0 1 1 156 154" />
      </G>
    </Svg>
  );
};