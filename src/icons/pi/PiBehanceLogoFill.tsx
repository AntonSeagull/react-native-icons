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

export const PiBehanceLogoFill = (props: IconProps) => {
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
        <Path d="M92 120H64V96h28a12 12 0 0 1 0 24m4 16H64v32h32a16 16 0 0 0 0-32m80-16a24 24 0 0 0-22.62 16h45.24A24 24 0 0 0 176 120m64-64v144a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16m-96 32a8 8 0 0 0 8 8h48a8 8 0 0 0 0-16h-48a8 8 0 0 0-8 8m-16 64a32 32 0 0 0-14.13-26.53A28 28 0 0 0 92 80H56a8 8 0 0 0-8 8v88a8 8 0 0 0 8 8h40a32 32 0 0 0 32-32m88-8a40 40 0 1 0-13.54 30 8 8 0 0 0-10.59-12 24 24 0 0 1-38.49-10H208a8 8 0 0 0 8-8" />
      </G>
    </Svg>
  );
};