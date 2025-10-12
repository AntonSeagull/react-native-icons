

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiEnvelope = (props: IconProps) => {

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
          <Path  d="M2 0v17h13v-17h-13zM4.695 4l-1.408-3h10.426l-1.41 3h-7.608zM4.061 5h3.939v9h-4.002l-0.998 1.155v-12.414l1.061 2.259zM4.455 15h8.092l0.862 1h-9.816l0.862-1zM13.006 14h-4.006v-9h3.938l1.062-2.261v12.415l-0.994-1.154z" />
        </G>
      </Svg>
    );
  }

