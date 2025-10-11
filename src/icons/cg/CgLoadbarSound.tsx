

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgLoadbarSound = (props: IconProps) => {

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
          <Path d="M11 6H13V18H11V6Z" fill="currentColor" />
          <Path d="M7 13H9V18H7V13Z" fill="currentColor" />
          <Path d="M15 9H17V18H15V9Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

