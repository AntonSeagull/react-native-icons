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

export const LiaQuestionSolid = (props: IconProps) => {
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
        <Path d="M16 4c-4.328 0-8 3.055-8 7v3h6v-3c0-.148.09-.363.438-.594.347-.23.914-.406 1.562-.406.652 0 1.219.176 1.563.406s.437.43.437.594c0 .578-.187.98-.562 1.438s-.958.93-1.594 1.468C14.566 14.988 13 16.496 13 19v1h6v-1c0-.34.125-.578.5-.969.375-.39.996-.851 1.656-1.406C22.476 15.515 24 13.816 24 11c0-3.91-3.664-7-8-7m0 2c3.395 0 6 2.367 6 5 0 2.145-.977 3.102-2.156 4.094-.59.496-1.219.98-1.782 1.562-.347.36-.617.828-.812 1.344h-1.937c.312-1.012.921-1.781 1.843-2.562.614-.516 1.282-1.055 1.844-1.75s1-1.606 1-2.688c0-.96-.57-1.758-1.312-2.25S17.004 8 16 8c-1.008 0-1.95.258-2.687.75C12.574 9.242 12 10.043 12 11v1h-2v-1c0-2.684 2.598-5 6-5m-3 16v6h6v-6Zm2 2h2v2h-2Z" />
      </G>
    </Svg>
  );
};