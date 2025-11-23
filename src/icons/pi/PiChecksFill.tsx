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

export const PiChecksFill = (props: IconProps) => {
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
        <Path d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M72 168a8 8 0 0 1-5.66-2.34l-24-24a8 8 0 0 1 11.32-11.32L72 148.69l58.34-58.35a8 8 0 0 1 11.32 11.32l-64 64A8 8 0 0 1 72 168m141.66-66.34-64 64a8 8 0 0 1-11.32 0l-16-16a8 8 0 0 1 11.32-11.32L144 148.69l58.34-58.35a8 8 0 0 1 11.32 11.32" />
      </G>
    </Svg>
  );
};