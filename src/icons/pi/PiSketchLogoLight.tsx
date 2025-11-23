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

export const PiSketchLogoLight = (props: IconProps) => {
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
        <Path d="m244.52 100.05-56-64A6 6 0 0 0 184 34H72a6 6 0 0 0-4.52 2l-56 64a6 6 0 0 0 .13 8l112 120a6 6 0 0 0 8.78 0l112-120a6 6 0 0 0 .13-7.95M75.94 110l34.6 86.49L29.81 110Zm91.2 0L128 207.84 88.86 110ZM92 98l36-48 36 48Zm88.06 12h46.13l-80.73 86.49Zm46.72-12H179l-39-52h41.28ZM74.72 46H116L77 98H29.22Z" />
      </G>
    </Svg>
  );
};