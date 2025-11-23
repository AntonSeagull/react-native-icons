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

export const LiaThumbsDownSolid = (props: IconProps) => {
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
        <Path d="M10.156 6c-1.41 0-2.64.996-2.937 2.375l-2.157 10C4.669 20.223 6.114 22 8 22h5.75l-.187.75c-.204.156-.333.223-.626.625-.468.64-.937 1.633-.937 2.969C12 27.77 13.29 29 14.906 29h.406l.313-.281L22.406 22H27V6Zm0 2H21v12.594l-6.406 6.312c-.422-.082-.594-.254-.594-.562 0-.903.273-1.461.531-1.813s.438-.437.438-.437l.344-.188.124-.406.594-2.25.313-1.25H8c-.66 0-1.105-.574-.969-1.219l2.125-10c.102-.469.524-.781 1-.781M23 8h2v12h-2Z" />
      </G>
    </Svg>
  );
};