

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscDeviceMobile = (props: IconProps) => {

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
          <Path d="M4.5 1h8l.5.5v13l-.5.5h-8l-.5-.5v-13l.5-.5zM5 14h7V2H5v12zm2.5-2h2v1h-2v-1z" />
        </G>
      </Svg>
    );
  }

