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

export const LiaStarHalfAltSolid = (props: IconProps) => {
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
        <Path d="m16 2.375-.906 2.031-3.25 7.313-7.938.812-2.25.25 1.688 1.5 5.906 5.344-1.656 7.813-.469 2.187h.031L9.094 28.5 16 24.531l6.906 3.969 1.969 1.125-.469-2.187-1.656-7.813 5.906-5.344 1.688-1.5-2.25-.25-7.938-.812-3.25-7.313Zm0 4.906 2.563 5.782.25.5.562.062 6.313.656-4.72 4.25-.437.375.125.563 1.313 6.187L16.5 22.5l-.5-.281Z" />
      </G>
    </Svg>
  );
};