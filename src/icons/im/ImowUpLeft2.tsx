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

export const ImowUpLeft2 = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M13.707 12.293 5.414 4H9a1 1 0 0 0 0-2H3a1 1 0 0 0-1 1h-.001v6a1 1 0 0 0 2 0V5.414l8.293 8.293a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414z" />
      </G>
    </Svg>
  );
};