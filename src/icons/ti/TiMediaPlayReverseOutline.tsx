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

export const TiMediaPlayReverseOutline = (props: IconProps) => {
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
        <Path d="M14 7v10l-5.1-5zm-1.4-1.4C10 8.1 6 12 6 12s4 3.9 6.6 6.4c.4.4.9.6 1.4.6 1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2-.5 0-1 .2-1.4.6" />
      </G>
    </Svg>
  );
};