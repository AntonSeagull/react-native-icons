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

export const LiaWrenchSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M21 4c-3.855 0-7 3.145-7 7 0 .715.215 1.363.414 2.016l-9.469 9.468a3.244 3.244 0 0 0 0 4.575 3.247 3.247 0 0 0 4.57 0l9.47-9.47c.648.2 1.3.411 2.015.411 3.855 0 7-3.145 7-7 0-1.027-.227-2-.625-2.875l-.594-1.32-1.02 1.023L22.587 11H21V9.414l4.195-4.195-1.32-.594A6.9 6.9 0 0 0 21 4m0 2c.172 0 .316.086.484.102L19 8.586V13h4.414l2.48-2.484c.02.168.106.312.106.484 0 2.773-2.227 5-5 5a5 5 0 0 1-1.969-.402l-.62-.266L8.1 25.641a1.226 1.226 0 0 1-1.742 0 1.23 1.23 0 0 1 0-1.746L16.668 13.59l-.266-.625A5 5 0 0 1 16 11c0-2.773 2.227-5 5-5" />
      </G>
    </Svg>
  );
};