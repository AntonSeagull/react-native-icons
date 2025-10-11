

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbColumns = (props: IconProps) => {

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
          <Path d="M4 6l5.5 0" />
          <Path d="M4 10l5.5 0" />
          <Path d="M4 14l5.5 0" />
          <Path d="M4 18l5.5 0" />
          <Path d="M14.5 6l5.5 0" />
          <Path d="M14.5 10l5.5 0" />
          <Path d="M14.5 14l5.5 0" />
          <Path d="M14.5 18l5.5 0" />
        </G>
      </Svg>
    );
  }

