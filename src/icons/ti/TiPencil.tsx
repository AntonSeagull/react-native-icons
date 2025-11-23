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

export const TiPencil = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M21 6.879 17.121 3A1.497 1.497 0 0 0 15 3L4.061 13.939c-.293.293-.558.727-.75 1.188C3.119 15.59 3 16.086 3 16.5V21h4.5c.414 0 .908-.119 1.371-.311s.896-.457 1.189-.75L21 9a1.497 1.497 0 0 0 0-2.121M5.768 15.061l8.293-8.293L15.293 8 7 16.293zM7.5 19H6l-1-1v-1.5c0-.077.033-.305.158-.605.01-.02 2.967 2.938 2.967 2.938-.322.134-.548.167-.625.167m1.439-.768L7.707 17 16 8.707l1.232 1.232zm9-9L14.767 6.06l1.293-1.293 3.17 3.172z" />
      </G>
    </Svg>
  );
};