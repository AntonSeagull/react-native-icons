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

export const VscDiffSingle = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="m10.71 1.289 3 3 .29.71v9l-1 1H4l-1-1v-12l1-1h6zM4 13.999h9v-9l-3-3H4zm4-8H6v1h2v2h1v-2h2v-1H9v-2H8zm-2 5h5v1H6z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};