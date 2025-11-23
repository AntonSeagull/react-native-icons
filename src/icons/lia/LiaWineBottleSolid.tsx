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

export const LiaWineBottleSolid = (props: IconProps) => {
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
        <Path d="M15 3c-1.094 0-2 .906-2 2v1.688a1.02 1.02 0 0 0 0 .593v3.157l-.781.53c-1.39.927-2.219 2.516-2.219 4.188v.531a1.02 1.02 0 0 0 0 .594v6.407a1.02 1.02 0 0 0 0 .593V29h12v-5.812a1 1 0 0 0 0-.407v-6.593a1 1 0 0 0 0-.407v-.625c0-1.672-.828-3.261-2.219-4.187L19 10.438v-3.25a1 1 0 0 0 0-.407V5c0-1.094-.906-2-2-2Zm0 2h2v1h-2Zm0 3h2v3.531l.438.313 1.218.812c.793.528 1.262 1.399 1.313 2.344H12.03c.051-.945.52-1.816 1.313-2.344l1.219-.812.437-.313Zm-3 9h8v5h-8Zm0 7h8v3h-8Z" />
      </G>
    </Svg>
  );
};