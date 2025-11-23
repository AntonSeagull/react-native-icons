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

export const LiaDeviantart = (props: IconProps) => {
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
        <Path d="m18.375 4-.281.313-.407.375-.093.125-.063.125-1.781 3.375-.156.093H8.188v7.5h3.593l-3.469 6.625-.124.219V28h5.437l.281-.312.406-.375.094-.125.063-.125 1.781-3.375.156-.094h7.407v-7.5h-3.594l3.468-6.625.125-.219V4Zm.844 2h2.593v2.781l-3.937 7.469-.281.594.406.5.344.406.281.344h3.188v3.5H15.78l-.281.187-.594.375-.187.157-.125.218L12.78 26h-2.594v-2.781l3.907-7.469.312-.562-.406-.532-.344-.406-.281-.344h-3.187v-3.5h6.03l.25-.187.595-.375.218-.156.125-.22Z" />
      </G>
    </Svg>
  );
};