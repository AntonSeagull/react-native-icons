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

export const LiaDumpsterSolid = (props: IconProps) => {
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
        <Path d="m5 6-2 8h1.334l.332 2H3v2h2l1 6v2h2v-2h16v2h2v-2l1-6h2v-2h-1.666l.332-2H29l-2-8H5m1.563 2h2.775l-.766 4h-3.01zm4.828 0H15v4h-4.37zM17 8h3.61l.76 4H17zm5.662 0h2.776l1 4h-3.01zm-16.3 6h19.277l-1.332 8H7.693z" />
      </G>
    </Svg>
  );
};