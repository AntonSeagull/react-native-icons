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

export const GoMaximize = (props: IconProps) => {
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
        <Path d="M9.47 13.47a.749.749 0 1 1 1.06 1.06l-5.719 5.72H9a.75.75 0 0 1 0 1.5H3a1 1 0 0 1-.133-.013l-.016-.003q-.02-.005-.039-.011-.051-.012-.099-.031a1 1 0 0 1-.083-.044.7.7 0 0 1-.279-.279A.7.7 0 0 1 2.25 21v-6a.75.75 0 0 1 1.5 0v4.189zM21 2.25a1 1 0 0 1 .132.012l.016.003q.02.005.04.011.05.012.098.031a1 1 0 0 1 .083.044.7.7 0 0 1 .279.279.66.66 0 0 1 .102.37v6a.75.75 0 0 1-1.5 0V4.811l-5.72 5.719a.749.749 0 1 1-1.06-1.06l5.719-5.72H15a.75.75 0 0 1 0-1.5z" />
      </G>
    </Svg>
  );
};