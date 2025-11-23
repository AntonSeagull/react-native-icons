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

export const LiaDeskpro = (props: IconProps) => {
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
        <Path d="M6.7 5c-.249.01-.694.04-.694.783v9.92C5.826 19.76 9.795 21 10.975 21h4.236a4 4 0 0 1-1.207-2.488c-.06-.625.883-.703.932-.088.01.109.255 2.576 2.695 2.576h.299l1.517-2.578.246-.422H23v-7.404c0-1.895-.834-5.606-5.883-5.586h-4.049c.476.506.866 1.147.866 1.99-.001.625-.934.625-.934 0 0-2.123-2.263-2.01-2.46-1.99-.01 0-.02-.01-.03-.01zm11.814 7.004c.927.06 1.77 1.008 1.394 2.299L17 12.975c.37-.724.957-1.007 1.514-.971M20.445 19l-1.091 2H24c1.794 0 4-1 5-2zM19 22c1 1 1.593 1.552 1.594 1.797.01.092.029 1.999-1.828 2.887-.521.245-.694.306-1.276.316L16 29c1 0 1.541 0 1.959-.05 2.449-.318 4.102-2.196 4.55-3.329.134-.336.481-1.223.491-3.621z" />
      </G>
    </Svg>
  );
};