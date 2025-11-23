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

export const GrWindows = (props: IconProps) => {
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
        <Path fill="#001589" fillRule="evenodd" d="M23.923 0 10.959 1.893v9.588l12.964-.102zM0 3.398l.009 8.155 9.773-.055-.004-9.432zm.008 17.283 9.773 1.344-.008-9.44-9.766-.063zm10.951 1.49L23.923 24l.004-11.326-12.986-.022z" />
      </G>
    </Svg>
  );
};