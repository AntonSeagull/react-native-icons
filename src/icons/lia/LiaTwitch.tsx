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

export const LiaTwitch = (props: IconProps) => {
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
        <Path d="M6.5 5 5 9v16h5.5v3h3l3-3H21l6-6V5ZM9 7h16v11l-3 3h-6l-3 3v-3H9Zm5 4v6h2v-6Zm5 0v6h2v-6Z" />
      </G>
    </Svg>
  );
};