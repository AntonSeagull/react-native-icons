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

export const PiListDashesThin = (props: IconProps) => {
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
        <Path d="M92 64a4 4 0 0 1 4-4h120a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4m124 60H96a4 4 0 0 0 0 8h120a4 4 0 0 0 0-8m0 64H96a4 4 0 0 0 0 8h120a4 4 0 0 0 0-8M56 60H40a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8m0 64H40a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8m0 64H40a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8" />
      </G>
    </Svg>
  );
};