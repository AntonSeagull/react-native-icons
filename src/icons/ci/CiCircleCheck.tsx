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

export const CiCircleCheck = (props: IconProps) => {
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
        <Path d="M15.81 10.4a.5.5 0 0 0-.71-.71l-3.56 3.56-1.73-1.73a.5.5 0 0 0-.71.71l2.08 2.08a.513.513 0 0 0 .71 0Z" />
        <Path d="M12 21.934A9.934 9.934 0 1 1 21.933 12 9.945 9.945 0 0 1 12 21.934m0-18.867A8.934 8.934 0 1 0 20.933 12 8.944 8.944 0 0 0 12 3.067" />
      </G>
    </Svg>
  );
};