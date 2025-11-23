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

export const LiaHomeSolid = (props: IconProps) => {
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
        <Path d="m16 2.594-.719.687-13 13L3.72 17.72 5 16.437V28h9V18h4v10h9V16.438l1.281 1.28 1.438-1.437-13-13Zm0 2.844 9 9V26h-5V16h-8v10H7V14.438Z" />
      </G>
    </Svg>
  );
};