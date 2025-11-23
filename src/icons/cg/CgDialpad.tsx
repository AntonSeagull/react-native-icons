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

export const CgDialpad = (props: IconProps) => {
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
        <Path fill="currentColor" d="M5.5 3h3v3h-3zM5.5 8h3v3h-3zM5.5 13v3h3v-3zM10.5 3h3v3h-3zM10.5 8v3h3V8zM10.5 13h3v3h-3zM10.5 18v3h3v-3zM15.5 3h3v3h-3zM15.5 8v3h3V8zM15.5 13h3v3h-3z" />
      </G>
    </Svg>
  );
};