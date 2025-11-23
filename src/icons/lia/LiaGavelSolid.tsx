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

export const LiaGavelSolid = (props: IconProps) => {
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
        <Path d="m15.969 1.594-.719.687-7 7.031-.719.688 4.438 4.438.687-.72.344-.343 2.094 2.094L3.28 27.28 4.72 28.72 16.53 16.906l2.063 2.063-.344.343-.719.688 4.438 4.438.687-.72L30.375 16l-.719-.687-3-3.032-.687-.687-.719.687-.281.281L19.375 7l1-1-.719-.687-3-3.032Zm0 2.812L17.563 6l-5.594 5.594L10.375 10ZM18 8.438 23.563 14 20 17.563 14.438 12Zm7.969 5.968L27.562 16l-5.593 5.594L20.375 20Z" />
      </G>
    </Svg>
  );
};