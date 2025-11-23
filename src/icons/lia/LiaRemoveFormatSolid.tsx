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

export const LiaRemoveFormatSolid = (props: IconProps) => {
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
        <Path d="M4.29 5.973 3.083 7.57l24.693 18.608 1.203-1.598-10.953-8.254L20.285 10H25v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-16a.5.5 0 0 0-.5.5v2.777zM12 10h5.285l-1.623 4.545-3.728-2.81A.5.5 0 0 0 12 11.5zm2.254 8.49L13 22h-1.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H16l.62-1.734z" />
      </G>
    </Svg>
  );
};