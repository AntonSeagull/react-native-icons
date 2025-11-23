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

export const PiEqualizerBold = (props: IconProps) => {
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
        <Path d="M80 108a12 12 0 0 1-12 12H28a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12m-12 28H28a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24m0 40H28a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24m80-40h-40a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24m0 40h-40a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24m40-96h40a12 12 0 0 0 0-24h-40a12 12 0 0 0 0 24m40 16h-40a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24m0 40h-40a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24m0 40h-40a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24" />
      </G>
    </Svg>
  );
};