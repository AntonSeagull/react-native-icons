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

export const CiPercent = (props: IconProps) => {
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
        <Path d="M12 21.934A9.934 9.934 0 1 1 21.933 12 9.945 9.945 0 0 1 12 21.934m0-18.868A8.934 8.934 0 1 0 20.933 12 8.944 8.944 0 0 0 12 3.066" />
        <Path d="M9 10.258a1.5 1.5 0 1 1 1.061-.439A1.5 1.5 0 0 1 9 10.258m0-2a.5.5 0 1 0 .353.146A.5.5 0 0 0 9 8.259ZM7.758 16.743a.5.5 0 0 1-.358-.853l8.489-8.49a.5.5 0 0 1 .707.707L8.111 16.6a.5.5 0 0 1-.353.143M15 16.742a1.5 1.5 0 1 1 1.061-.438 1.5 1.5 0 0 1-1.061.438m0-2a.5.5 0 0 0-.354.147.5.5 0 0 0-.146.352.5.5 0 1 0 1 0 .5.5 0 0 0-.5-.5Z" />
      </G>
    </Svg>
  );
};