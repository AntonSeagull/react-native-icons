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

export const LiaIndustrySolid = (props: IconProps) => {
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
        <Path d="M20 5v5.469l-3 1.781V9.219l-1.5.937L12 12.25V9.219l-1.5.937-5 3-.5.281V27h22V5Zm2 2h3v18H7V14.531l3-1.781v3.031l1.5-.937L15 12.75v3.031l1.5-.937 5-3 .5-.281ZM9 17v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2ZM9 21v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2Z" />
      </G>
    </Svg>
  );
};