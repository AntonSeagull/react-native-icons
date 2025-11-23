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

export const CgNametag = (props: IconProps) => {
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
        <Path fill="currentColor" d="M4 14v6h6v-2H6v-4z" />
        <Path fill="currentColor" fillRule="evenodd" d="M9 9v6h6V9zm4 2h-2v2h2z" clipRule="evenodd" />
        <Path fill="currentColor" d="M4 10V4h6v2H6v4zM20 10V4h-6v2h4v4zM20 14v6h-6v-2h4v-4z" />
      </G>
    </Svg>
  );
};