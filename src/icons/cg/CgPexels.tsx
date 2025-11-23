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

export const CgPexels = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M12 5a5.001 5.001 0 0 1 0 10v4H6V5zM8 7v10h2v-4h2l.003-.001a2.993 2.993 0 0 0 3.041-3.044l-.007-.39a2.61 2.61 0 0 0-2.711-2.562l-.306.005L12 7z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};