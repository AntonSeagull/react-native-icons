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

export const SiQualcomm = (props: IconProps) => {
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
        <Path d="M12 0C6.23 0 1.576 4.486 1.576 10.474c0 6.004 4.653 10.474 10.424 10.474.984 0 1.935-.134 2.835-.384l1.134 2.919c.117.317.35.517.768.517h1.8c.435 0 .751-.284.551-.834l-1.467-3.82c2.885-1.817 4.803-5.036 4.803-8.889C22.424 4.487 17.77 0 12 0m4.536 16.562-1.317-3.42c-.117-.283-.35-.55-.85-.55H12.65c-.433 0-.767.284-.567.834l1.735 4.486A7.2 7.2 0 0 1 12 18.13c-4.22 0-7.222-3.319-7.222-7.655S7.78 2.819 12 2.819s7.222 3.319 7.222 7.655c0 2.535-1.018 4.703-2.686 6.087" />
      </G>
    </Svg>
  );
};