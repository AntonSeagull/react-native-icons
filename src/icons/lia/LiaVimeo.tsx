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

export const LiaVimeo = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M27.988 10.41q-.159 3.514-4.894 9.617-4.897 6.37-8.282 6.371-2.103 0-3.55-3.878-.972-3.562-1.938-7.118-1.077-3.883-2.312-3.882-.271 0-1.883 1.132L4 11.195a353 353 0 0 0 3.504-3.129C9.082 6.7 10.27 5.98 11.059 5.906c1.867-.18 3.02 1.098 3.449 3.836q.698 4.435.969 5.512.808 3.678 1.78 3.676.75.001 2.263-2.383c1.003-1.594 1.543-2.8 1.617-3.633q.21-2.058-1.617-2.059-.863 0-1.778.391c1.18-3.867 3.434-5.75 6.762-5.64q3.697.105 3.484 4.804" />
      </G>
    </Svg>
  );
};