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

export const CgData = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M12 8.89a3 3 0 0 1 1 5.829v5.17h-2v-5.17a3.001 3.001 0 0 1 1-5.83m0 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2" clipRule="evenodd" />
        <Path fill="currentColor" d="M7.05 6.94A6.98 6.98 0 0 0 5 11.89c0 2.177.994 4.122 2.554 5.406l1.423-1.424A5 5 0 0 1 7 11.89c0-1.38.56-2.63 1.464-3.535zM15.536 8.353A4.99 4.99 0 0 1 17 11.89c0 1.626-.776 3.07-1.977 3.983l1.423 1.424A6.99 6.99 0 0 0 19 11.889a6.98 6.98 0 0 0-2.05-4.95z" />
        <Path fill="currentColor" d="M1 11.89c0-3.038 1.231-5.788 3.222-7.78l1.414 1.415A8.97 8.97 0 0 0 3 11.89a8.97 8.97 0 0 0 2.636 6.364l-1.414 1.414A10.97 10.97 0 0 1 1 11.89M19.778 19.667A10.97 10.97 0 0 0 23 11.89c0-3.038-1.231-5.788-3.222-7.778l-1.414 1.414A8.97 8.97 0 0 1 21 11.89a8.97 8.97 0 0 1-2.636 6.364z" />
      </G>
    </Svg>
  );
};