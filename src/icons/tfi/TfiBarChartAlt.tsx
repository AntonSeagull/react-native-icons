

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiBarChartAlt = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8.5, 8.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M17 16v1h-17v-1h17zM12 10h2v5h1v-6h-4v6h1v-5zM7 7h2v8h1v-9h-4v9h1v-8zM2 3h2v12h1v-13h-4v13h1v-12z" />
        </G>
      </Svg>
    );
  }

