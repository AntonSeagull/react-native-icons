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

export const CiCircleAlert = (props: IconProps) => {
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
        <Path d="M12.5 9a.5.5 0 0 0-1 0v4.02a.5.5 0 0 0 1 0Z" />
        <Circle cx={12} cy={15.001} r={0.5} />
        <Path d="M12 21.935A9.933 9.933 0 1 1 21.934 12 9.945 9.945 0 0 1 12 21.935m0-18.866A8.933 8.933 0 1 0 20.934 12 8.944 8.944 0 0 0 12 3.069" />
      </G>
    </Svg>
  );
};