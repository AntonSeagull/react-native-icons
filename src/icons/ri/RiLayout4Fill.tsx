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

export const RiLayout4Fill = (props: IconProps) => {
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
        <Path d="M11 13v8H4a1 1 0 0 1-1-1v-7zm2-10h7a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-7zM3 4a1 1 0 0 1 1-1h7v8H3z" />
      </G>
    </Svg>
  );
};