

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuBed = (props: IconProps) => {

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
          <Path d="M2 4v16" />
          <Path d="M2 8h18a2 2 0 0 1 2 2v10" />
          <Path d="M2 17h20" />
          <Path d="M6 8v9" />
        </G>
      </Svg>
    );
  }

