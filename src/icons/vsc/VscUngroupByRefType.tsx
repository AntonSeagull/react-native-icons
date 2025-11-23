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

export const VscUngroupByRefType = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="M2.9 1 5 3.1l-.8.7L3 2.6V7H2V2.5L.8 3.8l-.7-.7L2.2 1zM3 13.4V9H2v4.4L.8 12.2l-.7.7L2.2 15h.7L5 12.9l-.7-.7zM8.5 7h-2L6 6.5v-2l.5-.5h2l.5.5v2zM7 6h1V5H7zm7.5 1h-3l-.5-.5v-3l.5-.5h3l.5.5v3zM12 6h2V4h-2zm-3.5 6h-2l-.5-.5v-2l.5-.5h2l.5.5v2zM7 11h1v-1H7zm7.5 2h-3l-.5-.5v-3l.5-.5h3l.5.5v3zM12 12h2v-2h-2zm-1-2H9v1h2zm0-5H9v1h2z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};