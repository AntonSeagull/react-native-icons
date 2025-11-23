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

export const TbCardboardsOff = (props: IconProps) => {
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
        <Path d="M20.96 16.953q.04-.22.04-.453V8a2 2 0 0 0-2-2h-9M6 6H5a2 2 0 0 0-2 2v8.5A2.5 2.5 0 0 0 5.5 19h1.06a3 3 0 0 0 2.34-1.13l1.54-1.92a2 2 0 0 1 3.12 0l1.54 1.92A3 3 0 0 0 17.44 19h1.06q.233 0 .454-.041" />
        <Path d="M7 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0M16.714 12.7a1 1 0 0 0-1.417-1.411zM3 3l18 18" />
      </G>
    </Svg>
  );
};