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

export const TfiEnvelope = (props: IconProps) => {
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
        <Path d="M2 0v17h13V0zm2.695 4L3.287 1h10.426l-1.41 3zm-.634 1H8v9H3.998L3 15.155V2.741zm.394 10h8.092l.862 1H3.593zm8.551-1H9V5h3.938L14 2.739v12.415z" />
      </G>
    </Svg>
  );
};