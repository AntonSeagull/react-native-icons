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

export const VscReplace = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="m3.221 3.739 2.261 2.269L7.7 3.784l-.7-.7-1.012 1.007-.008-1.6a.523.523 0 0 1 .5-.526H8V1H6.48A1.48 1.48 0 0 0 5 2.489V4.1L3.927 3.033zm6.67 1.794h.01q.274.467.806.467.59 0 .94-.503.354-.503.353-1.333 0-.766-.301-1.207-.302-.442-.86-.442-.608 0-.938.581h-.01V1H9v4.919h.89zm-.015-1.061v-.34q0-.372.175-.601a.54.54 0 0 1 .445-.23.49.49 0 0 1 .436.233q.155.23.155.643 0 .496-.169.768a.52.52 0 0 1-.47.27.5.5 0 0 1-.411-.211.85.85 0 0 1-.16-.532zM9 12.769Q8.616 13 7.892 13q-.845 0-1.369-.533Q6 11.934 6 11.093q0-.972.56-1.53Q7.122 9 8.06 9q.65 0 .94.179v.998a1.26 1.26 0 0 0-.792-.276q-.488 0-.774.298-.284.294-.283.816 0 .506.272.797.273.287.749.287.423 0 .828-.276zM4 7 3 8v6l1 1h7l1-1V8l-1-1zm0 1h7v6H4z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};