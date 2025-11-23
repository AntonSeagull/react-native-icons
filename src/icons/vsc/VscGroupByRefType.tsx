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

export const VscGroupByRefType = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="M1.5 1h2v1H2v12h1.5v1h-2l-.5-.5v-13zm6 6h-2L5 6.5v-2l.5-.5h2l.5.5v2zM6 6h1V5H6zm7.5 1h-3l-.5-.5v-3l.5-.5h3l.5.5v3zM11 6h2V4h-2zm-3.5 6h-2l-.5-.5v-2l.5-.5h2l.5.5v2zM6 11h1v-1H6zm7.5 2h-3l-.5-.5v-3l.5-.5h3l.5.5v3zM11 12h2v-2h-2zm-1-2H8v1h2zm0-5H8v1h2z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};