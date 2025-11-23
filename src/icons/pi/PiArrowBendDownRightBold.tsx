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

export const PiArrowBendDownRightBold = (props: IconProps) => {
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
        <Path d="m232.49 160.49-48 48a12 12 0 0 1-17-17L195 164h-67A108.12 108.12 0 0 1 20 56a12 12 0 0 1 24 0 84.09 84.09 0 0 0 84 84h67l-27.52-27.51a12 12 0 0 1 17-17l48 48a12 12 0 0 1 .01 17" />
      </G>
    </Svg>
  );
};