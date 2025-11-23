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

export const CiCircleChevUp = (props: IconProps) => {
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
        <Path d="M11.65 10.15a.49.49 0 0 1 .7 0l3 3a.495.495 0 0 1-.7.7L12 11.21l-2.65 2.64a.495.495 0 0 1-.7-.7Z" />
        <Path d="M2.067 12A9.933 9.933 0 1 1 12 21.934 9.944 9.944 0 0 1 2.067 12m18.866 0A8.933 8.933 0 1 0 12 20.934 8.943 8.943 0 0 0 20.933 12" />
      </G>
    </Svg>
  );
};