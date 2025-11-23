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

export const GiTransform = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M128 32a96 96 0 0 0-96 96 96 96 0 0 0 96 96 96 96 0 0 0 30.285-4.986L140.29 201.02l64.353-64.352 6.363-6.363 11.86 11.86A96 96 0 0 0 224 128a96 96 0 0 0-96-96m83.006 123.76-45.26 45.26L252.73 288l-23.468 23.467 115.24 23.047-23.05-115.24-23.466 23.466zM353.556 288l13.89 69.46L288 341.57V480h192V288z" />
      </G>
    </Svg>
  );
};