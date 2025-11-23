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

export const PiSkipForwardBold = (props: IconProps) => {
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
        <Path d="M200 28a12 12 0 0 0-12 12v62L74.55 31A20 20 0 0 0 44 47.88v160.24A20 20 0 0 0 74.55 225L188 154v62a12 12 0 0 0 24 0V40a12 12 0 0 0-12-12M68 200.73V55.27L184.3 128Z" />
      </G>
    </Svg>
  );
};