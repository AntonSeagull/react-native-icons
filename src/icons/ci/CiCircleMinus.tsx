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

export const CiCircleMinus = (props: IconProps) => {
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
        <Path d="M15 11.5a.5.5 0 0 1 0 1H9a.5.5 0 0 1 0-1Z" />
        <Path d="M12 21.934A9.933 9.933 0 1 1 21.932 12 9.945 9.945 0 0 1 12 21.934m0-18.866A8.933 8.933 0 1 0 20.932 12 8.944 8.944 0 0 0 12 3.068" />
      </G>
    </Svg>
  );
};