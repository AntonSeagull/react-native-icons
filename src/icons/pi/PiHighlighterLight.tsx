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

export const PiHighlighterLight = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M252.24 107.76a6 6 0 0 0-8.48 0l-50.35 50.34a2 2 0 0 1-2.82 0L105.9 73.41a2 2 0 0 1 0-2.82l50.34-50.35a6 6 0 0 0-8.48-8.48L97.41 62.1a14 14 0 0 0-1.71 17.71L73.41 102.1a14 14 0 0 0 0 19.8l6.1 6.1-59.75 59.76a6 6 0 0 0 2.34 9.93l72 24a6 6 0 0 0 6.14-1.45L136 184.49l6.1 6.1a14 14 0 0 0 19.8 0l22.28-22.29a14 14 0 0 0 17.72-1.71l50.34-50.35a6 6 0 0 0 0-8.48M94.38 209.14l-59.27-19.76L88 136.49 127.51 176Zm59-27a2 2 0 0 1-2.82 0l-10.35-10.34-48-48-10.31-10.39a2 2 0 0 1 0-2.82l22.1-22.1L175.51 160Z" />
      </G>
    </Svg>
  );
};