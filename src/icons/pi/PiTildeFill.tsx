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

export const PiTildeFill = (props: IconProps) => {
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
        <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-10 99.66c-13.19 15-25.34 20.29-36.37 20.29-14.94 0-27.81-9.61-38.43-17.54-19.2-14.34-31.89-23.81-53.2.48a8 8 0 1 1-12-10.55c31.05-35.41 56.34-16.53 74.8-2.75 19.2 14.34 31.89 23.81 53.2-.48a8 8 0 1 1 12 10.55" />
      </G>
    </Svg>
  );
};