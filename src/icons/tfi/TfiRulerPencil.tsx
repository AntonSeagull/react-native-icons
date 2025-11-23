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

export const TfiRulerPencil = (props: IconProps) => {
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
        <Path d="M4.492 0H2.508c-.827 0-1.5.673-1.5 1.5v10.657l2.521 4.956 2.464-4.959V1.5A1.503 1.503 0 0 0 4.492 0M2.508 1h1.984c.275 0 .5.225.5.5v1.019H2.008V1.5a.5.5 0 0 1 .5-.5m-.5 3.55V3.519h2.984V4.55zm1.94 9.471h-.87l-1.07-2.104V5.55h1v6.481h1V5.55h.984v6.37zM8 0v17h7V0zm6 16H9v-.984h2v-1H9V13h1v-1H9v-1h2v-1H9v-.984h1v-1H9v-1h2v-1H9V5h1V4H9V3h2V2H9V1h5z" />
      </G>
    </Svg>
  );
};