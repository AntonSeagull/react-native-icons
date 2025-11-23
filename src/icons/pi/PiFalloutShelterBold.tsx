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

export const PiFalloutShelterBold = (props: IconProps) => {
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
        <Path d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84 84.09 84.09 0 0 1-84 84m66-73.34-24 36a12 12 0 0 1-20 0l-22-33-22 33a12 12 0 0 1-20 0l-24-36A12 12 0 0 1 72 120h41.58L94 90.66A12 12 0 0 1 104 72h48a12 12 0 0 1 10 18.66L142.42 120H184a12 12 0 0 1 10 18.66" />
      </G>
    </Svg>
  );
};