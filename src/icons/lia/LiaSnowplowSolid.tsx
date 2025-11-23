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

export const LiaSnowplowSolid = (props: IconProps) => {
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
        <Path d="M10.5 6a3.005 3.005 0 0 0-2.875 2.188l-1.312 4.53-2-.655-.625 1.874 1.468.5-.281.282A2.93 2.93 0 0 0 4 16.813V19h-.812l-.157.813-1 5L1.781 26H30.22l-.25-1.187-1-5-.157-.813H28v-2.187c0-.797-.312-1.532-.875-2.094l-.281-.281 1.468-.5-.625-1.876-2 .657-1.312-4.531A3.005 3.005 0 0 0 21.5 6Zm0 2h11a.96.96 0 0 1 .938.719L23.656 13H8.344l1.219-4.281A.96.96 0 0 1 10.5 8m-3.062 7h17.125l1.156 1.125a.94.94 0 0 1 .281.688V19h-2v-2h-4v2h-8v-2H8v2H6v-2.187c0-.266.094-.5.281-.688Zm-2.625 6h22.375l.593 3H4.22Z" />
      </G>
    </Svg>
  );
};