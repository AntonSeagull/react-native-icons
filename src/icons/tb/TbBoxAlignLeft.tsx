

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBoxAlignLeft = (props: IconProps) => {

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
          <Path d="M10.002 20.003v-16h-5a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1h5z" />
          <Path d="M15.002 20.003h-.01" />
          <Path d="M20.003 20.003h-.011" />
          <Path d="M20.003 15.002h-.011" />
          <Path d="M20.003 9.002h-.011" />
          <Path d="M20.003 4.002h-.011" />
          <Path d="M15.002 4.002h-.01" />
        </G>
      </Svg>
    );
  }

