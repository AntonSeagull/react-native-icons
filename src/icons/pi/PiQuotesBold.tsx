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

export const PiQuotesBold = (props: IconProps) => {
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
        <Path d="M100 52H40a20 20 0 0 0-20 20v64a20 20 0 0 0 20 20h56v4a28 28 0 0 1-28 28 12 12 0 0 0 0 24 52.06 52.06 0 0 0 52-52V72a20 20 0 0 0-20-20m-4 80H44V76h52Zm120-80h-60a20 20 0 0 0-20 20v64a20 20 0 0 0 20 20h56v4a28 28 0 0 1-28 28 12 12 0 0 0 0 24 52.06 52.06 0 0 0 52-52V72a20 20 0 0 0-20-20m-4 80h-52V76h52Z" />
      </G>
    </Svg>
  );
};