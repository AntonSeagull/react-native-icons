

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imile2 = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M12 0h-9c-0.55 0-1 0.45-1 1v14c0 0.55 0.45 1 1 1h9c0.55 0 1-0.45 1-1v-14c0-0.55-0.45-1-1-1zM7.5 15.278c-0.43 0-0.778-0.348-0.778-0.778s0.348-0.778 0.778-0.778 0.778 0.348 0.778 0.778-0.348 0.778-0.778 0.778zM12 13h-9v-11h9v11z" fill="#000000" />
        </G>
      </Svg>
    );
  }

