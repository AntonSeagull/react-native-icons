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

export const LiaHtml5 = (props: IconProps) => {
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
        <Path d="m5.219 4 .093 1.094 1.75 19.781.063.688.656.187 7.938 2.219.25.062.281-.062 7.938-2.188.656-.187.062-.688 1.782-19.812.093-1.063h-1.093L6.313 4Zm2.187 2 17.188.031-1.625 18L16 25.97 9 24.03Zm2.407 3 .656 7.469h8.562l-.281 3.218-2.75.75h-.031l-2.75-.75-.156-2.062h-2.5l.343 3.969L15.97 23H16l5.063-1.406L21.75 14h-9.031l-.219-2.531h9.469L22.187 9Z" />
      </G>
    </Svg>
  );
};