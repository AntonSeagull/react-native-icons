

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDeviceMobileCode = (props: IconProps) => {

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
          <Path d="M11.5 21h-3.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" />
          <Path d="M20 21l2 -2l-2 -2" />
          <Path d="M17 17l-2 2l2 2" />
          <Path d="M11 4h2" />
          <Path d="M12 17v.01" />
        </G>
      </Svg>
    );
  }

