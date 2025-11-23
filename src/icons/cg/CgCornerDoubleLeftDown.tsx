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

export const CgCornerDoubleLeftDown = (props: IconProps) => {
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
        <Path fill="currentColor" d="m21.299 7.76-5.019 4.88-1.394-1.434 2.436-2.368-6.02.015a2.4 2.4 0 0 0-2.394 2.406l.014 5.9 2.268-2.256 1.41 1.418-4.962 4.937-4.937-4.962 1.418-1.41L6.522 17.3l-.014-6.036a4.8 4.8 0 0 1 4.788-4.812l5.928-.014-2.238-2.303 1.433-1.394z" />
      </G>
    </Svg>
  );
};