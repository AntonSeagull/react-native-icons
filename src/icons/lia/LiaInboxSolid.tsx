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

export const LiaInboxSolid = (props: IconProps) => {
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
        <Path d="M7.156 5 7 5.844l-2 13V27h22v-8.156l-2-13L24.844 5Zm1.719 2h14.25l1.688 11H18v1c0 1.117-.883 2-2 2s-2-.883-2-2v-1H7.188ZM7 20h5.188c.453 1.71 1.964 3 3.812 3s3.36-1.29 3.813-3H25v5H7Z" />
      </G>
    </Svg>
  );
};