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

export const CiCircleChevRight = (props: IconProps) => {
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
        <Path d="M13.85 11.65a.49.49 0 0 1 0 .7l-3 3a.495.495 0 0 1-.7-.7L12.79 12l-2.64-2.65a.495.495 0 0 1 .7-.7Z" />
        <Path d="M12 2.067A9.933 9.933 0 1 1 2.067 12 9.944 9.944 0 0 1 12 2.067m0 18.866A8.933 8.933 0 1 0 3.067 12 8.943 8.943 0 0 0 12 20.933" />
      </G>
    </Svg>
  );
};