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

export const LiaAnchorSolid = (props: IconProps) => {
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
        <Path d="M16 4c-2.2 0-4 1.8-4 4 0 1.852 1.281 3.398 3 3.844V14h-3v2h3v7.969c-2.426-.192-4.04-1.078-5.187-2.094-.876-.773-1.461-1.625-1.876-2.344l1.594-.781-4-1.812L4.47 21.25l1.656-.812a11.1 11.1 0 0 0 2.344 2.937c1.453 1.29 3.597 2.355 6.531 2.563V26l1 1 1-1v-.062c2.934-.208 5.078-1.274 6.531-2.563a11.1 11.1 0 0 0 2.344-2.937l1.656.812-1.062-4.312-4 1.812 1.593.781c-.414.719-1 1.57-1.875 2.344-1.148 1.016-2.761 1.902-5.187 2.094V16h3v-2h-3v-2.156c1.719-.446 3-1.992 3-3.844 0-2.2-1.8-4-4-4m0 2c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2" />
      </G>
    </Svg>
  );
};