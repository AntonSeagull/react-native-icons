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

export const TiCss3 = (props: IconProps) => {
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
        <Path d="m5.7 3.4-.6 3.2h12.3L17 8.7H4.7l-.6 3.2h12.3l-.7 3.6-5 1.7-4.3-1.7.3-1.6h-3L3 17.7l7.1 2.9 8.2-2.9 1.1-5.8.2-1.2L21 3.4z" />
      </G>
    </Svg>
  );
};