

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiWeightCrush = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M256 16c-41.42 0-75 33.58-75 75 0 17.06 5.874 32.398 15.468 45H136L46 346h420l-90-210h-60.468C325.127 123.398 331 108.06 331 91c0-41.42-33.58-75-75-75zm0 30c24.854 0 45 20.146 45 45 0 24.853-20.146 45-45 45s-45-20.147-45-45c0-24.854 20.146-45 45-45zm-4.218 330A60 60 0 0 0 196 436a60 60 0 0 0 120 0 60 60 0 0 0-64.218-60z" />
        </G>
      </Svg>
    );
  }

