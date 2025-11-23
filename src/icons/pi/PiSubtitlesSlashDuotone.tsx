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

export const PiSubtitlesSlashDuotone = (props: IconProps) => {
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
        <Path d="M232 64v128a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h192a8 8 0 0 1 8 8" opacity={0.2} />
        <Path d="M48 136a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H56a8 8 0 0 1-8-8m165.92 74.62a8 8 0 1 1-11.84 10.76L189.92 208H32a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h12.46l-2.38-2.62a8 8 0 1 1 11.84-10.76ZM175.37 192l-14.55-16H56a8 8 0 0 1 0-16h90.28l-14.55-16H104a8 8 0 0 1 0-16h13.19L59 64H32v128ZM200 144a8 8 0 0 0 0-16h-21.48a8 8 0 1 0 0 16Zm24-96H105.79a8 8 0 0 0 0 16H224v130.83a8 8 0 1 0 16 0V64a16 16 0 0 0-16-16" />
      </G>
    </Svg>
  );
};