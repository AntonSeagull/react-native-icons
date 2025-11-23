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

export const PiShrimpFill = (props: IconProps) => {
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
        <Path d="M136 116a12 12 0 1 1 12 12 12 12 0 0 1-12-12m104-56a28 28 0 0 1-16.2 25.38A80.09 80.09 0 0 1 144 160h-32a12 12 0 0 0 0 24h56a8 8 0 0 1 0 16h-48v16h32a8 8 0 0 1 0 16H96a80 80 0 0 1 0-160h116a12 12 0 0 0 0-24h-84a24 24 0 0 1-24-24 8 8 0 0 1 16 0 8 8 0 0 0 8 8h84a28 28 0 0 1 28 28M85.72 182.2a8 8 0 0 0-11.16-1.86l-15.36 11a8 8 0 0 0 9.3 13l15.36-11a8 8 0 0 0 1.86-11.14m-1.5-35.62L45.55 129a8 8 0 1 0-6.62 14.56l38.67 17.59a8 8 0 0 0 10.59-4 8 8 0 0 0-3.97-10.57M207.5 88H120v56h24a64.09 64.09 0 0 0 63.5-56" />
      </G>
    </Svg>
  );
};