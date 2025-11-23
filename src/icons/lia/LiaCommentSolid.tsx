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

export const LiaCommentSolid = (props: IconProps) => {
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
        <Path d="M3 6v20h9.586L16 29.414 19.414 26H29V6Zm2 2h22v16h-8.414L16 26.586 13.414 24H5Zm4 3v2h14v-2Zm0 4v2h14v-2Zm0 4v2h10v-2Z" />
      </G>
    </Svg>
  );
};