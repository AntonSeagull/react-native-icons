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

export const TbEyeglassFilled = (props: IconProps) => {
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
        <Path d="M6.5 21A4.5 4.5 0 0 1 2 16.5v-2.518l.004-.071.014-.103.018-.076 3.006-10.02A1 1 0 0 1 6 3h2a1 1 0 1 1 0 2H6.743l-2.4 8H10a1 1 0 0 1 1 1v1h2v-1a1 1 0 0 1 1-1h5.656l-2.4-8H16a1 1 0 0 1-.993-.883L15 4a1 1 0 0 1 1-1h2a1 1 0 0 1 .958.713l3.01 10.036.022.112.008.08L22 16.5a4.5 4.5 0 0 1-8.972.5h-2.056A4.5 4.5 0 0 1 6.5 21" />
      </G>
    </Svg>
  );
};