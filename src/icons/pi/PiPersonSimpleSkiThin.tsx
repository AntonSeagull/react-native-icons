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

export const PiPersonSimpleSkiThin = (props: IconProps) => {
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
        <Path d="M172 84a24 24 0 1 0-24-24 24 24 0 0 0 24 24m0-40a16 16 0 1 1-16 16 16 16 0 0 1 16-16M38.88 83.84l112 32.65 6.33 6.33A4 4 0 0 0 160 124h40a4 4 0 0 0 0-8h-38.34l-30.83-30.83a4 4 0 0 0-5.66 0l-12 12-72.05-21a4 4 0 0 0-2.24 7.68ZM128 93.65l11.07 11.08-17.14-5Zm106.22 107.27a65.8 65.8 0 0 1-55 8.43L22.88 163.83a4 4 0 1 1 2.24-7.68l78.27 22.79 33-33-49.49-14.1a4 4 0 1 1 2.2-7.69l56 16a4 4 0 0 1 1.73 6.67l-34.68 34.68 69.28 20.17a57.81 57.81 0 0 0 48.35-7.41 4 4 0 0 1 4.44 6.66" />
      </G>
    </Svg>
  );
};