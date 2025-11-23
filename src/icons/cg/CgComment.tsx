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

export const CgComment = (props: IconProps) => {
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
        <Path fill="currentColor" d="M17 9H7V7h10zM7 13h10v-2H7z" />
        <Path fill="currentColor" fillRule="evenodd" d="M2 18V2h20v16h-6v4h-2a4 4 0 0 1-4-4zm10-2v2a2 2 0 0 0 2 2v-4h6V4H4v12z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};