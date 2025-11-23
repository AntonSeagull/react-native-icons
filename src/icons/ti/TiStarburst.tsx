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

export const TiStarburst = (props: IconProps) => {
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
        <Path d="m19.064 10.109 1.179-2.387a.5.5 0 0 0-.416-.72l-2.656-.172-.172-2.656a.5.5 0 0 0-.721-.416l-2.385 1.18-1.477-2.215c-.186-.278-.646-.278-.832 0l-1.477 2.215-2.385-1.18a.5.5 0 0 0-.721.416L6.83 6.83l-2.657.171a.5.5 0 0 0-.416.721l1.179 2.386-2.214 1.477a.5.5 0 0 0 0 .832l2.215 1.477-1.18 2.386a.498.498 0 0 0 .416.72l2.656.171L7 19.828a.5.5 0 0 0 .721.416l2.386-1.179 1.477 2.214a.5.5 0 0 0 .832 0l1.477-2.214 2.386 1.179a.5.5 0 0 0 .721-.416l.171-2.656L19.827 17a.5.5 0 0 0 .416-.721l-1.179-2.385 2.214-1.478a.5.5 0 0 0 0-.832z" />
      </G>
    </Svg>
  );
};