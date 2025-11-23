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

export const Immer2 = (props: IconProps) => {
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
        <Path d="M15.784 14.309 7.212 6.505l.399-.4a1.83 1.83 0 0 0 .53-1.181l.046-.023 1.609-1.006a.676.676 0 0 0-.036-.898L6.961.191a.673.673 0 0 0-.896-.036L5.061 1.769l-.022.046c-.43.027-.852.204-1.178.531L2.339 3.873c-.327.327-.503.75-.53 1.181l-.046.023L.154 6.083a.676.676 0 0 0 .036.898l2.799 2.806a.673.673 0 0 0 .896.036l1.004-1.614.023-.046c.43-.027.852-.204 1.178-.531l.442-.443 7.783 8.596c.226.249.573.289.773.089l.787-.789c.199-.2.159-.549-.089-.775z" />
      </G>
    </Svg>
  );
};