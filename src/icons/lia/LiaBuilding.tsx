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

export const LiaBuilding = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M4 3v26h11v-4h2v4h11V3Zm2 2h20v22h-7v-4h-6v4H6Zm2 2v2h4V7Zm6 0v2h4V7Zm6 0v2h4V7ZM8 11v2h4v-2Zm6 0v2h4v-2Zm6 0v2h4v-2ZM8 15v2h4v-2Zm6 0v2h4v-2Zm6 0v2h4v-2ZM8 19v2h4v-2Zm6 0v2h4v-2Zm6 0v2h4v-2ZM8 23v2h4v-2Zm12 0v2h4v-2Z" />
      </G>
    </Svg>
  );
};