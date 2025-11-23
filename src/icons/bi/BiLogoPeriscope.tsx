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

export const BiLogoPeriscope = (props: IconProps) => {
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
        <Path d="M12.102 21c1.406 0 6.985-6.329 6.985-10.571C19.087 6.368 15.915 3 12.102 3c-4.017 0-7.188 3.366-7.188 7.429C4.913 14.67 10.492 21 12.102 21M10.979 5.885a4.7 4.7 0 0 1 1.143-.139c2.25 0 4.186 1.913 4.186 4.398 0 2.238-1.936 4.151-4.196 4.151-2.509 0-4.444-1.913-4.444-4.151 0-1.047.338-1.98.922-2.723v.022c0 .934.755 1.676 1.688 1.676.933.002 1.722-.764 1.722-1.697a1.68 1.68 0 0 0-1.02-1.54z" />
      </G>
    </Svg>
  );
};