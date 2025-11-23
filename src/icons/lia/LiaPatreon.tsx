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

export const LiaPatreon = (props: IconProps) => {
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
        <Path d="M4 4v24h7V4zm17.5 0C16.813 4 13 7.813 13 12.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5S26.187 4 21.5 4M6 6h3v20H6zm15.5 0c3.584 0 6.5 2.916 6.5 6.5S25.084 19 21.5 19a6.51 6.51 0 0 1-6.5-6.5C15 8.916 17.916 6 21.5 6" />
      </G>
    </Svg>
  );
};