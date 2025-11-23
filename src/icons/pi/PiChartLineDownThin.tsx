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

export const PiChartLineDownThin = (props: IconProps) => {
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
        <Path d="M228 208a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V48a4 4 0 0 1 8 0v14.34l60 60 29.17-29.17a4 4 0 0 1 5.66 0L196 158.34V128a4 4 0 0 1 8 0v40a4 4 0 0 1-.08.78 3 3 0 0 1-.1.34 3 3 0 0 1-.13.41 3 3 0 0 1-.2.39c-.05.1-.1.2-.16.3a4.2 4.2 0 0 1-1.11 1.11l-.31.16a4 4 0 0 1-.38.2 3 3 0 0 1-.41.13 3 3 0 0 1-.34.1 4 4 0 0 1-.78.08h-40a4 4 0 0 1 0-8h30.34L128 101.66l-29.17 29.17a4 4 0 0 1-5.66 0L36 73.66V204h188a4 4 0 0 1 4 4" />
      </G>
    </Svg>
  );
};