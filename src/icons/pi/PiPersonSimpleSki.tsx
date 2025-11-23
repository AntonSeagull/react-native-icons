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

export const PiPersonSimpleSki = (props: IconProps) => {
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
        <Path d="M172 88a28 28 0 1 0-28-28 28 28 0 0 0 28 28m0-40a12 12 0 1 1-12 12 12 12 0 0 1 12-12M32.32 77.76a8 8 0 0 1 9.92-5.44L112 92.67l10.32-10.33a8 8 0 0 1 11.32 0L163.31 112H200a8 8 0 0 1 0 16h-40a8 8 0 0 1-5.66-2.34l-5.61-5.66-111-32.36a8 8 0 0 1-5.41-9.88m204.12 126.48a69.78 69.78 0 0 1-58.37 8.95l-156.3-45.52a8 8 0 1 1 4.47-15.36l76 22.13L128.73 148 85.8 135.69a8 8 0 0 1 4.4-15.39l56 16a8 8 0 0 1 3.46 13.35l-29.9 29.9 62.79 18.28a53.78 53.78 0 0 0 45-6.9 8 8 0 1 1 8.88 13.31Z" />
      </G>
    </Svg>
  );
};