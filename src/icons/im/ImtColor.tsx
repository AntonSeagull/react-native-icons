

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const ImtColor = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
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
        <G fill={color} stroke={color}>
          <Path  d="M5.032 13l0.9-3h4.137l0.9 3h1.775l-3-10h-3.488l-3 10h1.776zM7.432 5h1.137l0.9 3h-2.937l0.9-3z" />
        </G>
      </Svg>
    );
  }

