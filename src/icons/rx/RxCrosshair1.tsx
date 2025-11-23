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

export const RxCrosshair1 = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 15 15"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 7.5, 7.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="currentColor" fillRule="evenodd" d="M.877 7.502a6.625 6.625 0 1 1 13.25 0 6.625 6.625 0 0 1-13.25 0M1.85 7A5.676 5.676 0 0 1 7 1.849V4.5a.5.5 0 1 0 1 0V1.849A5.68 5.68 0 0 1 13.155 7H10.5a.5.5 0 0 0 0 1h2.656A5.676 5.676 0 0 1 8 13.156V10.5a.5.5 0 0 0-1 0v2.655A5.68 5.68 0 0 1 1.849 8H4.5a.5.5 0 0 0 0-1z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};