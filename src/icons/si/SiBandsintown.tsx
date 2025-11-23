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

export const SiBandsintown = (props: IconProps) => {
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
        <Path d="M6.399 12.8v4.8H19.2v1.6H4.799V0H0v24h24V12.8zm4.801-8H6.399v6.4H11.2zm6.4 0h-4.8v6.4h4.8zM24 0h-4.8v11.2H24z" />
      </G>
    </Svg>
  );
};