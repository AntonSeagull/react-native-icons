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

export const SiGoogleads = (props: IconProps) => {
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
        <Path d="M4 22.93a4 4 0 1 1 0-8 4 4 0 0 1 0 8m19.464-6.001-8-13.857a4 4 0 0 0-6.93 4l8.001 13.857a4.001 4.001 0 0 0 6.93-4M7.514 4.844l-5.95 10.304A4.5 4.5 0 0 1 4 14.43c2.56-.008 4.625 2.158 4.494 4.715l3.217-5.573-3.61-6.25a4.46 4.46 0 0 1-.587-2.478" />
      </G>
    </Svg>
  );
};