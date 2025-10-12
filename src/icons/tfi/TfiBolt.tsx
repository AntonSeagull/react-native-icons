

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiBolt = (props: IconProps) => {

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
          <Path  d="M14.313 2.012h-7.152l-2.331 7.014h1.666l-2.010 6.052 9.483-8.051h-2.904l3.248-5.015zM11.247 8.027l-4.687 3.979 1.322-3.979h-1.665l1.665-5.015h4.592l-3.248 5.015h2.021z" />
        </G>
      </Svg>
    );
  }

