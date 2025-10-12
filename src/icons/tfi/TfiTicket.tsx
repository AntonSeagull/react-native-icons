

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiTicket = (props: IconProps) => {

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
          <Path  d="M9.5 1v0.5c0 0.552-0.449 1-1 1s-1-0.448-1-1v-0.5h-3.5v15h3.5v-0.5c0-0.552 0.449-1 1-1s1 0.448 1 1v0.5h3.5v-15h-3.5zM6.563 2c0.223 0.861 1.007 1.5 1.937 1.5s1.714-0.639 1.937-1.5h1.563v6h-7v-6h1.563zM10.437 15c-0.222-0.861-1.006-1.5-1.937-1.5s-1.714 0.639-1.937 1.5h-1.563v-6h7v6h-1.563z" />
        </G>
      </Svg>
    );
  }

