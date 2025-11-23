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

export const CiPaperplane = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m21.061 11.077-17.32-6.92a.994.994 0 0 0-1.17.32 1 1 0 0 0-.01 1.22l4.49 6a.525.525 0 0 1-.01.62L2.511 18.3a1.02 1.02 0 0 0 0 1.22 1 1 0 0 0 .8.4 1 1 0 0 0 .38-.07l17.36-6.9a1.006 1.006 0 0 0 .01-1.87Zm-17.69-5.99 16.06 6.42H8.061a1.3 1.3 0 0 0-.21-.41Zm-.06 13.82 4.53-5.98a1.2 1.2 0 0 0 .22-.42h11.38Z" data-name="Paper Plane" />
      </G>
    </Svg>
  );
};