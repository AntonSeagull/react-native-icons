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

export const LiaToolboxSolid = (props: IconProps) => {
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
        <Path d="M13 5c-1.094 0-2 .906-2 2v2H2v18h28V9h-9V7c0-1.094-.906-2-2-2Zm0 2h6v2h-6Zm-9 4h24v5h-4v-1h-4v1h-8v-1H8v1H4Zm0 7h4v1h4v-1h8v1h4v-1h4v7H4Z" />
      </G>
    </Svg>
  );
};