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

export const VscChip = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M5 1h1v2h1V1h1v2h1V1h1v2h1l1 1v1h2v1h-2v1h2v1h-2v1h2v1h-2v1l-1 1h-1v2H9v-2H8v2H7v-2H6v2H5v-2H4l-1-1v-1H1V9h2V8H1V7h2V6H1V5h2V4l1-1h1zM4 11h7V4H4z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};