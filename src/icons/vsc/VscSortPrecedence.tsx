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

export const VscSortPrecedence = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="M7 2 6 3v3h1V3h7v2.453l.207-.16.793.793V3l-1-1zm1 2h2v2H8zM5 9H3v2h2zM2 7 1 8v5l1 1h7l1-1V8L9 7zm0 6V8h7v5zm6-3H6v2h2zm5-6h-1v3.864l-1.182-1.182-.707.707 2.035 2.036h.708l2.035-2.036-.707-.707L13 7.864z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};