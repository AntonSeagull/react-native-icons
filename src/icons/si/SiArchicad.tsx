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

export const SiArchicad = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M22.59 16.322a1.41 1.41 0 1 1 0-2.82 1.41 1.41 0 0 1 0 2.82M.15 19.827a1.41 1.41 0 0 0 2.52 1.268S10.52 5.083 16.926 4.946c4.23-.09 4.232 5.642 4.232 5.642a1.41 1.41 0 1 0 2.82 0s.057-8.381-7.02-8.457C8.764 1.871.152 19.827.152 19.827" />
      </G>
    </Svg>
  );
};