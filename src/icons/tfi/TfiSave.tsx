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

export const TfiSave = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M14.164 0H1.5C.673 0 0 .673 0 1.5v14c0 .827.673 1.5 1.5 1.5h14c.827 0 1.5-.673 1.5-1.5V2.776zM8 1v4h3V1h1v5H4V1zM3 16v-6h11v6zm13-.5c0 .275-.225.5-.5.5H15V9H2v7h-.5a.5.5 0 0 1-.5-.5v-14a.5.5 0 0 1 .5-.5H3v6h10V1h.756L16 3.196z" />
      </G>
    </Svg>
  );
};