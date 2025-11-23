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

export const GiBookshelf = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M169 57v430h78V57zM25 105v190h46V105zm158 23h18v320h-18zm128.725 7.69-45.276 8.124 61.825 344.497 45.276-8.124zM89 153v270h62V153zm281.502 28.68-27.594 11.773 5.494 12.877 27.594-11.773zm12.56 29.433-27.597 11.772 5.494 12.877 27.593-11.772-5.492-12.877zm12.555 29.434-27.594 11.77 99.674 233.628 27.594-11.773zM25 313v30h46v-30zm190 7h18v128h-18zM25 361v126h46V361zm64 80v46h62v-46z" />
      </G>
    </Svg>
  );
};