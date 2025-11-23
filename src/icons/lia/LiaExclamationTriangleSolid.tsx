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

export const LiaExclamationTriangleSolid = (props: IconProps) => {
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
        <Path d="m16 3.219-.875 1.5-12 20.781-.844 1.5H29.72l-.844-1.5-12-20.781Zm0 4L26.25 25H5.75ZM15 14v6h2v-6Zm0 7v2h2v-2Z" />
      </G>
    </Svg>
  );
};