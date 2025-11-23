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

export const LiaMemorySolid = (props: IconProps) => {
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
        <Path d="M2 7v18h13v-1c0-.555.445-1 1-1s1 .445 1 1v1h13V7Zm2 2h24v9H4Zm2 2v5h6v-5Zm7 0v5h6v-5Zm7 0v5h6v-5ZM8 13h2v1H8Zm7 0h2v1h-2Zm7 0h2v1h-2ZM4 20h24v3h-9.406c-.442-1.11-1.336-2-2.594-2s-2.152.89-2.594 2H4Z" />
      </G>
    </Svg>
  );
};