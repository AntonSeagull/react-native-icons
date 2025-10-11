

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbProtocol = (props: IconProps) => {

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
          <Path d="M15 6l-7 12" />
          <Path d="M20 6l-7 12" />
          <Path d="M5 14v.015" />
          <Path d="M5 10.015v.015" />
        </G>
      </Svg>
    );
  }

