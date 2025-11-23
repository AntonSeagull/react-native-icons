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

export const PiToiletBold = (props: IconProps) => {
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
        <Path d="M128 68a12 12 0 0 1-12 12h-16a12 12 0 0 1 0-24h16a12 12 0 0 1 12 12m48.15 127.62 3.65 25.55A20 20 0 0 1 160 244H96a20 20 0 0 1-19.8-22.83l3.65-25.55A100.08 100.08 0 0 1 28 108a12 12 0 0 1 12-12h12V40a20 20 0 0 1 20-20h112a20 20 0 0 1 20 20v56h12a12 12 0 0 1 12 12 100.08 100.08 0 0 1-51.85 87.62M76 96h104V44H76Zm77.21 108.78a100.3 100.3 0 0 1-50.42 0L100.61 220h54.78ZM203.05 120H53a76 76 0 0 0 150.1 0Z" />
      </G>
    </Svg>
  );
};