

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscVm = (props: IconProps) => {

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
          <Path d="M14.5 2h-13l-.5.5v10l.5.5H7v1H4v1h8v-1H9v-1h5.5l.5-.5v-10l-.5-.5zM14 12H2V3h12v9z" />
        </G>
      </Svg>
    );
  }

