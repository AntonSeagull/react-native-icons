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

export const LiaObjectUngroupSolid = (props: IconProps) => {
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
        <Path d="M5 5v4h1v10H5v4h4v-1h2v2h-1v4h4v-1h10v1h4v-4h-1V14h1v-4h-4v1h-2V9h1V5h-4v1H9V5Zm4 3h10v1h1v10h-1v1H9v-1H8V9h1Zm13 5h2v1h1v10h-1v1H14v-1h-1v-2h6v1h4v-4h-1Z" />
      </G>
    </Svg>
  );
};