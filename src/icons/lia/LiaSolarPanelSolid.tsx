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

export const LiaSolarPanelSolid = (props: IconProps) => {
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
        <Path d="M15 4v2.594l-1.812-1.782-1.376 1.375L13.595 8H11v2h2.594l-1.781 1.813 1.374 1.374L15 11.408V14h2v-2.594l1.813 1.781 1.375-1.374L18.406 10H21V8h-2.594l1.782-1.812-1.375-1.375L17 6.593V4Zm1 3c1.102 0 2 .898 2 2s-.898 2-2 2-2-.898-2-2 .898-2 2-2m-9.781 9L4 24.875V28h24v-3.125L25.781 16Zm1.562 2H24.22L26 25.125V26H6v-.875ZM9 19l-.406 1.813h2.094L11 19Zm4 0-.187 1.813h2.093L15 19Zm4 0 .094 1.813h2.093L19 19Zm4 0 .313 1.813h2.093L23 19ZM8.188 22.813 7.812 25h2.282l.312-2.187Zm4.5 0L12.5 25h2.313l.093-2.187Zm4.406 0L17.187 25H19.5l-.187-2.187Zm4.5 0L21.906 25h2.282l-.375-2.187Z" />
      </G>
    </Svg>
  );
};