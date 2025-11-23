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

export const TiMediaFastForwardOutline = (props: IconProps) => {
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
        <Path d="m14 8.676 4.133 4.025L14 16.727zM13.8 6.4c-.994 0-1.8.807-1.8 1.801v9a1.8 1.8 0 0 0 3.053 1.287C17.434 16.174 21 12.701 21 12.701s-3.566-3.475-5.944-5.789A1.8 1.8 0 0 0 13.8 6.4M5 8.676l4.133 4.025L5 16.727zM4.8 6.4c-.994 0-1.8.807-1.8 1.801v9a1.8 1.8 0 0 0 3.053 1.287C8.434 16.174 12 12.701 12 12.701L6.056 6.912A1.8 1.8 0 0 0 4.8 6.4" />
      </G>
    </Svg>
  );
};