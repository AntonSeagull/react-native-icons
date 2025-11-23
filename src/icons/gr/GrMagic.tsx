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

export const GrMagic = (props: IconProps) => {
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
        <Path fill="none" stroke="#000" strokeWidth={2} d="m2.5 19.5 17-17 2 2-17 17zm.5.5L15 8l1 1L4 21zM5.5 3l-.5.5.5.5.5-.5zm6 0-.5.5.5.5.5-.5zm-3 3-.5.5.5.5.5-.5zm12 6-.5.5.5.5.5-.5zm0 5-.5.5.5.5.5-.5z" />
      </G>
    </Svg>
  );
};