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

export const LiaWalkingSolid = (props: IconProps) => {
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
        <Path d="M16.5 4A3.514 3.514 0 0 0 13 7.5c0 1.922 1.578 3.5 3.5 3.5S20 9.422 20 7.5 18.422 4 16.5 4m0 2c.84 0 1.5.66 1.5 1.5S17.34 9 16.5 9 15 8.34 15 7.5 15.66 6 16.5 6m-3.687 5.25c-.516.043-.997.29-1.344.688L9.656 14.03a2 2 0 0 0-.469.969L8.5 18.875l1.969.344.687-3.875 1.813-2.094H13l.781.156-1.187 5.375a1.98 1.98 0 0 0 .344 1.594L18.468 28h2.47l-6.375-8.812 1.187-5.407.469.094.75 2.625a2.01 2.01 0 0 0 1.218 1.313l3.532 1.343.687-1.875-3.5-1.343-.781-2.626a1.98 1.98 0 0 0-1.531-1.406l-3.25-.625a2 2 0 0 0-.531-.031m-.344 10.781-.5 1.938L9.063 28h2.468l2.313-3.156.125-.594Z" />
      </G>
    </Svg>
  );
};