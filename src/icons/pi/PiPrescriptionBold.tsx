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

export const PiPrescriptionBold = (props: IconProps) => {
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
        <Path d="m189 188 19.52-19.51a12 12 0 0 0-17-17L172 171l-33.07-33A56 56 0 0 0 124 28H72a12 12 0 0 0-12 12v152a12 12 0 0 0 24 0v-52h23l48 48-19.52 19.51a12 12 0 0 0 17 17L172 205l19.51 19.52a12 12 0 0 0 17-17ZM84 52h40a32 32 0 0 1 0 64H84Z" />
      </G>
    </Svg>
  );
};