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

export const LiaBlindSolid = (props: IconProps) => {
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
        <Path d="M14.5 3A3.514 3.514 0 0 0 11 6.5c0 1.922 1.578 3.5 3.5 3.5S18 8.422 18 6.5 16.422 3 14.5 3m0 2c.84 0 1.5.66 1.5 1.5S15.34 8 14.5 8 13 7.34 13 6.5 13.66 5 14.5 5m-3.687 5.25c-.516.043-.997.29-1.344.688L7.656 13.03a2 2 0 0 0-.468.969L6.5 17.875l1.969.344.687-3.875 1.813-2.094H11l.781.156-1.187 5.375a1.98 1.98 0 0 0 .344 1.594L16.468 27h2.47l-6.375-8.812 1.187-5.407.469.094.75 2.625a2.01 2.01 0 0 0 1.219 1.313l2.968 1.125 3.875 8.75.938-.375L20 17.374l.406-1.094-3.5-1.343-.781-2.626a1.98 1.98 0 0 0-1.531-1.406l-3.25-.625a2 2 0 0 0-.531-.031m-.344 10.781-.5 1.938L7.063 27H9.53l2.313-3.156.125-.594Z" />
      </G>
    </Svg>
  );
};