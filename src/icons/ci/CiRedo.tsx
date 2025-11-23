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

export const CiRedo = (props: IconProps) => {
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
        <Path d="M4.061 13.67A7.958 7.958 0 0 0 16.2 19.74a8.06 8.06 0 0 0 3.77-6.77.5.5 0 0 0-1 0 6.976 6.976 0 0 1-11 5.7 6.97 6.97 0 0 1 1-11.97 10.1 10.1 0 0 1 4.64-.69v1.45a.5.5 0 0 0 .81.39l2.47-1.95a.5.5 0 0 0 0-.79L14.4 3.17a.5.5 0 0 0-.8.4v1.44c-.71-.01-1.43-.03-2.13.02a7.985 7.985 0 0 0-7.41 8.64Z" />
      </G>
    </Svg>
  );
};