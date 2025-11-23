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

export const SlDocs = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 1024 1024"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 512, 512)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M768 0H416c-35.344 0-64 28.656-64 64h352v256h256v512H736v64h224c35.344 0 64-28.656 64-64V256.016zm0 256V90.496L933.472 256zM64 128c-35.344 0-64 28.656-64 64v768c0 35.344 28.656 64 64 64h544c35.344 0 64-28.656 64-64V384.016L416 128zm544 832H64V192h288v256h256zM416 384V218.496L581.472 384z" />
      </G>
    </Svg>
  );
};