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

export const PiQuotesLight = (props: IconProps) => {
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
        <Path d="M100 58H40a14 14 0 0 0-14 14v64a14 14 0 0 0 14 14h62v10a34 34 0 0 1-34 34 6 6 0 0 0 0 12 46.06 46.06 0 0 0 46-46V72a14 14 0 0 0-14-14m2 80H40a2 2 0 0 1-2-2V72a2 2 0 0 1 2-2h60a2 2 0 0 1 2 2Zm114-80h-60a14 14 0 0 0-14 14v64a14 14 0 0 0 14 14h62v10a34 34 0 0 1-34 34 6 6 0 0 0 0 12 46.06 46.06 0 0 0 46-46V72a14 14 0 0 0-14-14m2 80h-62a2 2 0 0 1-2-2V72a2 2 0 0 1 2-2h60a2 2 0 0 1 2 2Z" />
      </G>
    </Svg>
  );
};