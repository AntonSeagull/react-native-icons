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

export const LiaMarsSolid = (props: IconProps) => {
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
        <Path d="M17 4v2h7.563l-7.688 7.688C15.523 12.645 13.832 12 12 12c-4.406 0-8 3.594-8 8s3.594 8 8 8 8-3.594 8-8c0-1.832-.645-3.523-1.687-4.875L26 7.438V15h2V4Zm-5 10c3.324 0 6 2.676 6 6s-2.676 6-6 6-6-2.676-6-6 2.676-6 6-6" />
      </G>
    </Svg>
  );
};