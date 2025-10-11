

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCircuitCell = (props: IconProps) => {

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
          <Path d="M2 12h8" />
          <Path d="M14 12h8" />
          <Path d="M10 5v14" />
          <Path d="M14 9v6" />
        </G>
      </Svg>
    );
  }

