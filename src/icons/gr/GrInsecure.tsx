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

export const GrInsecure = (props: IconProps) => {
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
        <Path fill="none" stroke="#000" strokeWidth={2} d="M7 6.919V6a4.724 4.724 0 0 1 5-5 4.724 4.724 0 0 1 5 5v5.052M12 23a7 7 0 1 0-7-7 7 7 0 0 0 7 7zm2.985-7h-5.97" />
      </G>
    </Svg>
  );
};