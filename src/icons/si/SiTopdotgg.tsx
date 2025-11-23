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

export const SiTopdotgg = (props: IconProps) => {
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
        <Path d="M0 4.379h7.622V12H2.329A2.32 2.32 0 0 1 .008 9.679Zm24 0H8.757v15.243h3.114a4.507 4.507 0 0 0 4.507-4.508V12h3.115A4.507 4.507 0 0 0 24 7.493z" />
      </G>
    </Svg>
  );
};