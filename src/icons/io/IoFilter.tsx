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

export const IoFilter = (props: IconProps) => {
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
        <Path d="M472 168H40a24 24 0 0 1 0-48h432a24 24 0 0 1 0 48M392 280H120a24 24 0 0 1 0-48h272a24 24 0 0 1 0 48M296 392h-80a24 24 0 0 1 0-48h80a24 24 0 0 1 0 48" />
      </G>
    </Svg>
  );
};