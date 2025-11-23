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

export const CgStack = (props: IconProps) => {
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
        <Path fill="currentColor" d="M20 4v12h2V2H8v2z" />
        <Path fill="currentColor" fillRule="evenodd" d="M2 8v14h14V8zm12 2H4v10h10z" clipRule="evenodd" />
        <Path fill="currentColor" d="M17 7H5V5h14v14h-2z" />
      </G>
    </Svg>
  );
};