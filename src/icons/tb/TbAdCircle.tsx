

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAdCircle = (props: IconProps) => {

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
          <Path d="M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0" />
          <Path d="M7 15v-4.5a1.5 1.5 0 0 1 3 0v4.5" />
          <Path d="M7 13h3" />
          <Path d="M14 9v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z" />
        </G>
      </Svg>
    );
  }

