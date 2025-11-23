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

export const TfiPanel = (props: IconProps) => {
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
        <Path d="M0 0v17h17V0zm16 16H1V1h15zM4 10.232V13h1v-2.768c.738-.218 1.281-.894 1.281-1.701S5.738 7.048 5 6.83V4H4v2.83c-.738.218-1.281.894-1.281 1.701S3.262 10.015 4 10.232m.5-2.482a.782.782 0 0 1 0 1.562.781.781 0 0 1 0-1.562m3.5.357V13h1V8.107c.738-.218 1.281-.894 1.281-1.701S9.738 4.923 9 4.705V4H8v.705c-.738.218-1.281.894-1.281 1.701S7.262 7.89 8 8.107m.5-2.482a.782.782 0 1 1-.002 1.564.782.782 0 0 1 .002-1.564m4 7.792c.982 0 1.781-.799 1.781-1.781 0-.808-.543-1.483-1.281-1.701V4h-1v5.935a1.78 1.78 0 0 0-1.281 1.701c0 .982.799 1.781 1.781 1.781m0-2.563a.782.782 0 0 1 0 1.562.782.782 0 0 1 0-1.562" />
      </G>
    </Svg>
  );
};