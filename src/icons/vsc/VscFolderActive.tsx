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

export const VscFolderActive = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="M7.71 3h6.79l.51.5v4.507A5 5 0 0 0 14 7.416V5.99H7.69l-.86.86-.35.15H1.99v6H7.1q.106.523.316 1H1.51l-.5-.5v-11l.5-.5h5l.35.15zm-.22 2h6.5l.01-.99H7.5l-.36-.15-.85-.85H2v3h4.28l.86-.86z" clipRule="evenodd" />
        <Path fillRule="evenodd" d="M9.778 8.674a4 4 0 1 1 4.444 6.652 4 4 0 0 1-4.444-6.652m2.13 4.99 2.387-3.182-.8-.6-2.077 2.769-1.301-1.041-.625.78 1.704 1.364.713-.09z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};