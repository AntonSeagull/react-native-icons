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

export const CgDisplayGrid = (props: IconProps) => {
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
        <Path fill="currentColor" d="M7 7v4h4V7zM13 7h4v4h-4zM13 13v4h4v-4zM7 13h4v4H7z" />
        <Path fill="currentColor" fillRule="evenodd" d="M3 3h18v18H3zm2 2v14h14V5z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};