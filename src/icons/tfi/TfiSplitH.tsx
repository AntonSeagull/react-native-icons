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

export const TfiSplitH = (props: IconProps) => {
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
        <Path d="M2.207 8h3.772v1H2.207l1.646 1.646-.707.707L.293 8.5l2.854-2.854.707.707zm11.647-2.354-.707.707L14.793 8h-3.772v1h3.772l-1.646 1.646.707.707L16.707 8.5zM8 17h1V0H8z" />
      </G>
    </Svg>
  );
};