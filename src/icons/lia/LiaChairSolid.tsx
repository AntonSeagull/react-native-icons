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

export const LiaChairSolid = (props: IconProps) => {
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
        <Path d="M11 4v12.438c-.102.027-.223.066-.312.093-.485.149-.82.305-1.063.469a2 2 0 0 0-.312.25c-.079.082-.188.25-.188.25L9 17.719V20h1v8h2v-8h8v8h2v-8h1v-2.281l-.125-.219s-.11-.168-.187-.25a2 2 0 0 0-.313-.25c-.242-.164-.578-.32-1.062-.469-.09-.027-.211-.066-.313-.093V4h-2v1h-6V4Zm2 3h2v9.031c-.758.02-1.437.04-2 .094Zm4 0h2v9.125c-.562-.055-1.242-.074-2-.094Z" />
      </G>
    </Svg>
  );
};