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

export const HiMiniLanguage = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M7.75 2.75a.75.75 0 0 0-1.5 0v1.258a33 33 0 0 0-3.599.278.75.75 0 1 0 .198 1.487A31.6 31.6 0 0 1 8.7 5.545 19.4 19.4 0 0 1 7 9.56a19 19 0 0 1-1.002-2.05.75.75 0 0 0-1.384.577 21 21 0 0 0 1.492 2.91 19.6 19.6 0 0 1-3.828 4.154.75.75 0 1 0 .945 1.164A21 21 0 0 0 7 12.331q.143.198.29.391a.75.75 0 0 0 1.194-.91 19 19 0 0 1-.59-.815 20.9 20.9 0 0 0 2.333-5.332q.465.047.924.108a.75.75 0 0 0 .198-1.487 33 33 0 0 0-3.599-.278z" />
        <Path fillRule="evenodd" d="M13 8a.75.75 0 0 1 .671.415l4.25 8.5a.75.75 0 1 1-1.342.67L15.787 16h-5.573l-.793 1.585a.75.75 0 1 1-1.342-.67l4.25-8.5A.75.75 0 0 1 13 8m2.037 6.5L13 10.427 10.964 14.5z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};