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

export const PiGlobeXFill = (props: IconProps) => {
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
        <Path d="M128 24a104 104 0 0 0 0 208 8 8 0 0 0 5-14.21c-1.12-.91-20.88-17.32-31.06-49.77h26a8 8 0 0 0 0-16H98.08a140.2 140.2 0 0 1 0-48h59.88A138 138 0 0 1 160 128a8 8 0 0 0 16 0 155 155 0 0 0-1.84-24h38.51a87.6 87.6 0 0 1 3.33 24 8 8 0 0 0 16 0A104.11 104.11 0 0 0 128 24m-26 64a115.1 115.1 0 0 1 26-45 115.3 115.3 0 0 1 26 45Zm68.75 0a135.3 135.3 0 0 0-22.3-45.6 88.29 88.29 0 0 1 58 45.6Zm50.95 85.66L203.31 192l18.35 18.34a8 8 0 0 1-11.32 11.32L192 203.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L180.69 192l-18.35-18.34a8 8 0 0 1 11.32-11.32L192 180.69l18.34-18.35a8 8 0 0 1 11.32 11.32Z" />
      </G>
    </Svg>
  );
};