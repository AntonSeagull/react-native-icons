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

export const ImlFive2 = (props: IconProps) => {
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
        <Path d="M.946 0 2.23 14.4 7.992 16l5.777-1.602L15.055 0zm11.722 13.482-4.644 1.287v.007l-.012-.004-.012.004v-.007l-4.644-1.287L2.258 1.178h11.508zm-2.5-5.198-.204 2.29-1.972.532-1.967-.53-.126-1.41H4.126l.247 2.774 3.626 1.003 3.615-1.003.485-5.422H5.662l-.161-1.809h6.758l.158-1.766H3.57l.477 5.341z" />
      </G>
    </Svg>
  );
};