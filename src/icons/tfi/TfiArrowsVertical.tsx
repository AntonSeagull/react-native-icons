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

export const TfiArrowsVertical = (props: IconProps) => {
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
        <Path d="m11.642 12.063.716.698L8.5 16.716l-3.858-3.954.716-.698L8 14.771V2.229L5.358 4.937l-.716-.699L8.5.284l3.858 3.954-.716.698L9 2.229v12.543z" />
      </G>
    </Svg>
  );
};