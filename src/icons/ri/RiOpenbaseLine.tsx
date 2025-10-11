

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiOpenbaseLine = (props: IconProps) => {

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
          <Path d="M12 3L2 5.996L3 15.46L12 22.5L21 15.46L22 5.996L12 3ZM19.8367 7.43572L12 19.9608L4.16326 7.43572L12 5.08783L19.8367 7.43572Z" />
        </G>
      </Svg>
    );
  }

