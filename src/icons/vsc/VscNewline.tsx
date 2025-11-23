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

export const VscNewline = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="M12 5.5v1.984a.5.5 0 0 1-.5.5H4.618l1.633-1.633-.707-.707-2.121 2.121L3 8.188v.568L5.544 11.3l.707-.707-1.61-1.609H11.5a1.5 1.5 0 0 0 1.5-1.5V5.5z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};