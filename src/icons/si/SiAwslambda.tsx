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

export const SiAwslambda = (props: IconProps) => {
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
        <Path d="M4.986 0a.545.545 0 0 0-.534.548l-.006 4.908c0 .145.06.283.159.39a.53.53 0 0 0 .38.155h3.429l8.197 17.68a.54.54 0 0 0 .488.319h5.811a.547.547 0 0 0 .543-.548v-4.908a.543.543 0 0 0-.543-.548h-2.013L12.739.316A.55.55 0 0 0 12.245 0H4.991Zm.54 1.09h6.367l8.16 17.681a.54.54 0 0 0 .489.318h1.817v3.817h-4.922L9.24 5.226a.54.54 0 0 0-.488-.318h-3.23Zm2.013 8.237a.54.54 0 0 0-.486.31L.6 23.213a.55.55 0 0 0 .032.528.53.53 0 0 0 .454.25h6.169a.55.55 0 0 0 .497-.31l3.38-7.165a.54.54 0 0 0-.003-.469l-3.093-6.41a.55.55 0 0 0-.494-.31Zm.006 1.804 2.488 5.152-3.122 6.62H1.947Z" />
      </G>
    </Svg>
  );
};