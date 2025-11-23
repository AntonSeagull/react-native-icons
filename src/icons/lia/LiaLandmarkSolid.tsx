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

export const LiaLandmarkSolid = (props: IconProps) => {
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
        <Path d="M16 3.906 3.625 9.062 3 9.345V12h2v11H3v5h26v-5h-2V12h2V9.344l-.625-.281Zm0 2.188L25.375 10H6.625ZM7 12h2v11H7Zm4 0h2v11h-2Zm4 0h2v11h-2Zm4 0h2v11h-2Zm4 0h2v11h-2ZM5 25h22v1H5Z" />
      </G>
    </Svg>
  );
};