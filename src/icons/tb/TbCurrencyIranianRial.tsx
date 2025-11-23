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

export const TbCurrencyIranianRial = (props: IconProps) => {
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
        <Path d="M9 4v9a2 2 0 0 1-2 2H6a3 3 0 0 1-3-3v-1M12 5v8a1 1 0 0 0 1 1h1a2 2 0 0 0 2-2v-1M21 14v1.096a5 5 0 0 1-3.787 4.85L17 20M11 18h.01M14 18h.01" />
      </G>
    </Svg>
  );
};