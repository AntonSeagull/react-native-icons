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

export const TfiSpray = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M6.5 3a4.01 4.01 0 0 0-3.453 2H2v10.5c0 .827.673 1.5 1.5 1.5h6c.827 0 1.5-.673 1.5-1.5V5H9.953A4.02 4.02 0 0 0 6.5 3m0 1a3.02 3.02 0 0 1 2.234 1H4.267C4.828 4.376 5.64 4 6.5 4M10 15.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5V6h7zM8 0H5v3h3zM7 2H6V1h1zm4.945-.489 3.136.518-.163.986-6-.99.085-.514-.085-.514 6-.99.163.986z" />
      </G>
    </Svg>
  );
};