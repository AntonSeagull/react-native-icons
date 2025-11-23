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

export const RiAlignItemVerticalCenterLine = (props: IconProps) => {
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
        <Path d="M9 18V6H6v12zm-4 2a1 1 0 0 1-1-1v-6H2v-2h2V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6h2V7a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4h2v2h-2v4a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4h-2v6a1 1 0 0 1-1 1zm10-4h3V8h-3z" />
      </G>
    </Svg>
  );
};