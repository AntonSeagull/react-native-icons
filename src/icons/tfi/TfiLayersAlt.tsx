

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayersAlt = (props: IconProps) => {

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
          <Path  d="M11 1h-11v9h11v-9zM10 9h-9v-7h9v7zM14 13h-11v-1.981h1v0.981h9v-7h-0.994v-1h1.994v9zM17 7v9h-11v-1.981h1v0.981h9v-7h-0.994v-1h1.994z" />
        </G>
      </Svg>
    );
  }

