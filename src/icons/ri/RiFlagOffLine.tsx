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

export const RiFlagOffLine = (props: IconProps) => {
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
        <Path d="m16.586 18 4.607 4.607 1.414-1.415-19.8-19.799-1.413 1.415L3 4.414V22h2v-6h7l.724 1.447a1 1 0 0 0 .894.553zm-2-2h-.35l-.35-.7zm-2-2H5V6.414zM21 6v10.758l-2-2V7h-6.236l-1-2H9.242l-2-2h5.14a1 1 0 0 1 .895.553L14 5h6a1 1 0 0 1 1 1" />
      </G>
    </Svg>
  );
};