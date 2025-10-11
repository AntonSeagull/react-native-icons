

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCarGarage = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M5 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <Path d="M15 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <Path d="M5 20h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
          <Path d="M3 6l9 -4l9 4" />
        </G>
      </Svg>
    );
  }

