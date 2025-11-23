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

export const TiHomeOutline = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M22.262 10.468c-3.39-2.854-9.546-8.171-9.607-8.225L12 1.68l-.652.563c-.062.053-6.221 5.368-9.66 8.248A2.04 2.04 0 0 0 1 12a2 2 0 0 0 2 2h1v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6h1a2 2 0 0 0 2-2c0-.598-.275-1.161-.738-1.532M14 20h-4v-5h4zm4-8 .002 8H15v-6H9v6H6v-8H2.999C5.764 9.688 10.314 5.773 12 4.32c1.686 1.453 6.234 5.367 9 7.681z" />
      </G>
    </Svg>
  );
};