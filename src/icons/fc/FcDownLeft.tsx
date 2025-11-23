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

export const FcDownLeft = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#3F51B5" d="m4 29 14-11.7v23.4z" />
        <Path fill="#3F51B5" d="M42 21V8h-8v13c0 2.2-1.8 4-4 4H13v8h17c6.6 0 12-5.4 12-12" />
      </G>
    </Svg>
  );
};