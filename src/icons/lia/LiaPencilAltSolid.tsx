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

export const LiaPencilAltSolid = (props: IconProps) => {
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
        <Path d="M24.688 4.031c-.836 0-1.649.336-2.282.969l-.093.094-.625-.594L5.188 21l-.063.313-1.094 5.5-.312 1.468 1.469-.312 5.5-1.094.312-.062 16.5-16.5-.594-.594.063-.063.031-.062A3.254 3.254 0 0 0 27 5a3.3 3.3 0 0 0-2.312-.969m0 1.969c.312 0 .64.14.906.406.535.535.535 1.246 0 1.782l-.094.093L23.719 6.5l.093-.094c.266-.265.563-.406.875-.406m-2.97 1.313 2.97 2.968-1.438 1.469-3-3Zm-2.843 2.875 2.938 2.937-10.438 10.469-.406-1.813-.125-.625-.625-.125-1.813-.406ZM6.969 22.344l2.187.5.5 2.187-2.031.407-1.062-1.063Z" />
      </G>
    </Svg>
  );
};