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

export const VscDebugRestartFrame = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M1 10V9h5.207a5.5 5.5 0 0 0-.185 1zm6.257-3a5.5 5.5 0 0 1 1.08-1H1v1zM6.6 13a5.5 5.5 0 0 1-.393-1H1v1zM15 3v1H1V3zm-3.36 10.031a2.531 2.531 0 1 0-2.192-3.797h1.068v.844h-1.97l-.421-.422v-2.25h.844v1.032a3.375 3.375 0 1 1-.423 3.412l.782-.318a2.53 2.53 0 0 0 2.313 1.5z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};