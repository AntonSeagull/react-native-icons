

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiHyper = (props: IconProps) => {

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
          <Path d="M13.565 17.91H24v1.964H13.565zm-3.201-5.09l-9.187 8.003 2.86-7.004L0 11.179l9.187-8.002-3.11 7.451z" />
        </G>
      </Svg>
    );
  }

