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

export const LiaStar = (props: IconProps) => {
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
        <Path d="m16 2.125-.906 2.063-3.25 7.28-7.938.845-2.25.25 1.688 1.5 5.906 5.343-1.656 7.813-.469 2.187 1.969-1.125 6.906-4 6.906 4 1.969 1.125-.469-2.187-1.656-7.813 5.906-5.343 1.688-1.5-2.25-.25-7.938-.844-3.25-7.281Zm0 4.906 2.563 5.782.25.53.562.063 6.281.656-4.687 4.22-.438.406.125.562 1.313 6.156-5.469-3.125-.5-.312-.5.312-5.469 3.125 1.313-6.156.125-.562-.438-.407-4.687-4.218 6.281-.657.563-.062.25-.531Z" />
      </G>
    </Svg>
  );
};