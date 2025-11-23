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

export const IoPricetagsSharp = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M288 16 0 304l176 176 288-288V16Zm80 128a32 32 0 1 1 32-32 32 32 0 0 1-32 32" />
        <Path d="M480 64v144L216.9 471.1 242 496l270-272V64z" />
      </G>
    </Svg>
  );
};