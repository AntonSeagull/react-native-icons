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

export const LiaLiraSignSolid = (props: IconProps) => {
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
        <Path d="M11 4v5.906L8 11v2l3-1.094v2L8 15v2l3-1.094V28h1c5.762 0 10.828-3.848 12.344-9.406l.625-2.344-1.938-.5-.625 2.313c-1.187 4.363-4.976 7.359-9.406 7.78V15.189L19 13v-2l-6 2.188v-2L19 9V7l-6 2.188V4Z" />
      </G>
    </Svg>
  );
};