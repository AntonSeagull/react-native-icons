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

export const PiTextHFiveThin = (props: IconProps) => {
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
        <Path d="M244 180a32 32 0 0 1-32 32 31.62 31.62 0 0 1-22.86-9.2 4 4 0 0 1 5.72-5.6A23.67 23.67 0 0 0 212 204a24 24 0 0 0 0-48 23.67 23.67 0 0 0-17.14 6.8 4 4 0 0 1-6.81-3.46l8-48A4 4 0 0 1 200 108h40a4 4 0 0 1 0 8h-36.61l-5.87 35.21A33.26 33.26 0 0 1 212 148a32 32 0 0 1 32 32M144 52a4 4 0 0 0-4 4v56H44V56a4 4 0 0 0-8 0v120a4 4 0 0 0 8 0v-56h96v56a4 4 0 0 0 8 0V56a4 4 0 0 0-4-4" />
      </G>
    </Svg>
  );
};