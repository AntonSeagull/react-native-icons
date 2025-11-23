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

export const LiaAtlassian = (props: IconProps) => {
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
        <Path d="M15.932 4c-.214 0-.434.12-.578.363-5.227 8.615-.372 15.661 2.824 22.264a.66.66 0 0 0 .584.373h7.59c.483 0 .799-.528.576-.979 0 0-10.208-21.14-10.46-21.667A.6.6 0 0 0 15.933 4m-.05 3.744c2.12 4.394 6.43 13.32 8.33 17.256h-4.605a161 161 0 0 0-.89-1.752c-2.598-5.06-5.07-9.872-2.834-15.504M10.317 14c-.227 0-.442.126-.568.389L4.07 26.004c-.22.464.117.996.608.996H12.6c.25 0 .47-.156.574-.385 1.713-3.602.683-9.077-2.309-12.353a.76.76 0 0 0-.549-.262m.254 3.26c1.338 2.374 1.798 5.435 1.086 7.74H6.787z" />
      </G>
    </Svg>
  );
};